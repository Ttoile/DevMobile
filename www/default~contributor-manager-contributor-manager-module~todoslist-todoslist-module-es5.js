(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contributor-manager-contributor-manager-module~todoslist-todoslist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contributor-manager/contributor-manager.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contributor-manager/contributor-manager.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Contributor Management</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"primary\" (click)=\"close()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form  #form=\"ngForm\" (ngSubmit)=\"addNewContributor(login.value)\">\n    <div class=\"ion-padding\">\n      <ion-item>\n        <ion-input  name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required #login></ion-input>\n      </ion-item>\n      <ion-item>\n        Read and Write<ion-toggle (click)=\"toggleChange()\" checked=\"toggleVal\"></ion-toggle>Read Only\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-text color=\"danger\" *ngIf=\"!hideErrMessage\">{{errMessage}}</ion-text>\n        <ion-text color=\"success\" *ngIf=\"!hideSuccessMessage\">{{successMessage}}</ion-text>\n        <ion-text color=\"warning\" *ngIf=\"!hideFailedMessage\">{{failedMessage}}</ion-text>\n      </div>\n      <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>\n    </div>\n  </form>\n  <ion-list>\n    <ion-toolbar>\n      <ion-title slot=\"start\" size=\"small\">Contributors</ion-title><ion-title slot=\"end\" size=\"small\">Access rights</ion-title><br>\n    </ion-toolbar>\n    <ion-item-sliding *ngFor=\"let contrib of contributorsRights\">\n      <ion-item>\n        <ion-label>\n          <h2>{{ contrib.contributorName }}</h2>\n        </ion-label>\n        <ion-buttons >\n          <ion-button (click)=\"giveReadRights(contrib.contributorName)\" fill=\"solid\" size=\"default\" [color]=\"contrib.permission ? 'danger' : 'success'\">Read</ion-button>\n          <ion-button (click)=\"giveWriteRights(contrib.contributorName)\" fill=\"solid\" size=\"default\" [color]=\"contrib.permission ? 'success' : 'danger'\">Read/Write</ion-button>\n          <ion-button (click)=\"removeContributor(contrib.contributorName)\" fill=\"solid\" size=\"default\" [color]=\"'danger'\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contributor-manager/contributor-manager-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/contributor-manager/contributor-manager-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContributorManagerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorManagerPageRoutingModule", function() { return ContributorManagerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contributor_manager_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contributor-manager.page */ "./src/app/contributor-manager/contributor-manager.page.ts");




var routes = [
    {
        path: '',
        component: _contributor_manager_page__WEBPACK_IMPORTED_MODULE_3__["ContributorManagerPage"]
    }
];
var ContributorManagerPageRoutingModule = /** @class */ (function () {
    function ContributorManagerPageRoutingModule() {
    }
    ContributorManagerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContributorManagerPageRoutingModule);
    return ContributorManagerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/contributor-manager/contributor-manager.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contributor-manager/contributor-manager.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContributorManagerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorManagerPageModule", function() { return ContributorManagerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contributor_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contributor-manager-routing.module */ "./src/app/contributor-manager/contributor-manager-routing.module.ts");
/* harmony import */ var _contributor_manager_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contributor-manager.page */ "./src/app/contributor-manager/contributor-manager.page.ts");







var ContributorManagerPageModule = /** @class */ (function () {
    function ContributorManagerPageModule() {
    }
    ContributorManagerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _contributor_manager_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContributorManagerPageRoutingModule"]
            ],
            declarations: [_contributor_manager_page__WEBPACK_IMPORTED_MODULE_6__["ContributorManagerPage"]]
        })
    ], ContributorManagerPageModule);
    return ContributorManagerPageModule;
}());



/***/ }),

/***/ "./src/app/contributor-manager/contributor-manager.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/contributor-manager/contributor-manager.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyaWJ1dG9yLW1hbmFnZXIvY29udHJpYnV0b3ItbWFuYWdlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contributor-manager/contributor-manager.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contributor-manager/contributor-manager.page.ts ***!
  \*****************************************************************/
/*! exports provided: ContributorManagerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorManagerPage", function() { return ContributorManagerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_todoslist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/todoslist.service */ "./src/app/services/todoslist.service.ts");





var ContributorManagerPage = /** @class */ (function () {
    function ContributorManagerPage(contributorManagerController, users, todolistService) {
        this.contributorManagerController = contributorManagerController;
        this.users = users;
        this.todolistService = todolistService;
        this.timeBeforeMessagesDisapear = 3000;
        this.errMessage = "Unkown user, please try again";
        this.successMessage = "Contributor added successfully";
        this.failedMessage = "This user is already a contributor";
        this.toggleLegend = "Read Only";
        this.toggleVal = false; // False = read only, true = read and write
        this.contributorsRights = [];
    }
    ContributorManagerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hideErrMessage = true;
        this.hideSuccessMessage = true;
        this.hideFailedMessage = true;
        setTimeout(function () {
            _this.updateContributorsDisplay();
        }, 500);
    };
    ContributorManagerPage.prototype.updateContributorsDisplay = function () {
        this.contributorsRights = [];
        var tmp = this.todolistService.getContributorsRead();
        for (var i = 0; i < tmp.length; i++)
            this.contributorsRights.push({ contributorName: this.users.getUserMail(tmp[i]), permission: false });
        tmp = this.todolistService.getContributorsWrite();
        for (var i = 0; i < tmp.length; i++)
            this.contributorsRights.push({ contributorName: this.users.getUserMail(tmp[i]), permission: true });
    };
    ContributorManagerPage.prototype.addNewContributor = function (mail) {
        var _this = this;
        if (this.emailExist(mail)) {
            this.hideErrMessage = true;
            this.hideFailedMessage = true;
            this.hideSuccessMessage = true;
            if (this.todolistService.addContributor(this.users.getUserId(mail), this.toggleVal)) {
                this.hideSuccessMessage = false;
                this.updateContributorsDisplay();
                setTimeout(function () { _this.hideSuccessMessage = true; }, this.timeBeforeMessagesDisapear);
            }
            else {
                this.hideFailedMessage = false;
                this.updateContributorsDisplay();
                setTimeout(function () { _this.hideFailedMessage = true; }, this.timeBeforeMessagesDisapear);
            }
        }
        else {
            this.hideErrMessage = false;
        }
    };
    ContributorManagerPage.prototype.removeContributor = function (contrib) {
        this.todolistService.removeContributor(this.users.getUserId(contrib));
        this.updateContributorsDisplay();
    };
    ContributorManagerPage.prototype.emailExist = function (email) {
        return this.users.userExist(email);
    };
    ContributorManagerPage.prototype.toggleChange = function () {
        if (this.toggleLegend == "Read Only")
            this.toggleLegend = "Read and Write";
        else
            this.toggleLegend = "Read Only";
        this.toggleVal = !this.toggleVal;
    };
    ContributorManagerPage.prototype.close = function () {
        this.contributorManagerController.dismiss();
    };
    ContributorManagerPage.prototype.giveReadRights = function (mail) {
        this.removeContributor(mail);
        this.todolistService.addContributor(this.users.getUserId(mail), false);
        this.updateContributorsDisplay();
    };
    ContributorManagerPage.prototype.giveWriteRights = function (mail) {
        this.removeContributor(mail);
        this.todolistService.addContributor(this.users.getUserId(mail), true);
        this.updateContributorsDisplay();
    };
    ContributorManagerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
        { type: _services_todoslist_service__WEBPACK_IMPORTED_MODULE_4__["TodoslistService"] }
    ]; };
    ContributorManagerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contributor-manager',
            template: __webpack_require__(/*! raw-loader!./contributor-manager.page.html */ "./node_modules/raw-loader/index.js!./src/app/contributor-manager/contributor-manager.page.html"),
            styles: [__webpack_require__(/*! ./contributor-manager.page.scss */ "./src/app/contributor-manager/contributor-manager.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_todoslist_service__WEBPACK_IMPORTED_MODULE_4__["TodoslistService"]])
    ], ContributorManagerPage);
    return ContributorManagerPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
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
    AuthService.prototype.signup = function (email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signInWithEmailAndPassword(email, password)
            .finally(function () { _this.getLoggedInName.emit(_this.getUsername()); });
    };
    AuthService.prototype.logout = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signOut();
        this.router.navigate(['/login']);
    };
    AuthService.prototype.getUsername = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email : "";
    };
    AuthService.prototype.getUserID = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid : "";
    };
    AuthService.prototype.isConnected = function () {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? true : false;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
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
    return AuthService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TodoslistService = /** @class */ (function () {
    function TodoslistService(db) {
        this.db = db;
    }
    // /!\ ATTENTION /!\ ce setUp doit absolument être appelé quand on va se servir de todolist pour une nouvelle liste (exemple: dans le constructeur de todolist.page.ts)
    TodoslistService.prototype.setUp = function (listeid) {
        var _this = this;
        this.listID = listeid;
        this.listDocObs = this.db.collection("list").doc(this.listID).valueChanges();
        this.listDocObs.subscribe(function (res) { return _this.listDoc = res; });
        this.todosCollection = this.db.collection("list").doc(listeid).collection("todos");
        this.todos = this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    TodoslistService.prototype.get = function (id) {
        return this.todos;
    };
    TodoslistService.prototype.add = function (listeid, todo) {
        return this.todosCollection.add(todo);
    };
    TodoslistService.prototype.addContributor = function (uid, write) {
        var writerIDS = this.listDoc.writerIDS;
        var readerIDS = this.listDoc.readerIDS;
        if (writerIDS.indexOf(uid) == -1 && readerIDS.indexOf(uid) == -1 && this.listDoc.ownerID !== uid) {
            if (write) {
                writerIDS.push(uid);
                this.db.collection("list").doc(this.listID).update({ writerIDS: writerIDS });
                return true;
            }
            else {
                readerIDS.push(uid);
                this.db.collection("list").doc(this.listID).update({ readerIDS: readerIDS });
                return true;
            }
        }
        else {
            return false;
        }
    };
    TodoslistService.prototype.getContributorsRead = function () {
        return this.listDoc.readerIDS;
    };
    TodoslistService.prototype.getContributorsWrite = function () {
        return this.listDoc.writerIDS;
    };
    TodoslistService.prototype.getContributors = function () {
        return this.listDoc.writerIDS.concat(this.listDoc.readerIDS);
    };
    TodoslistService.prototype.removeContributor = function (contrib) {
        var writerIDS = this.listDoc.writerIDS;
        var readerIDS = this.listDoc.readerIDS;
        if (writerIDS.indexOf(contrib) != -1) {
            writerIDS.splice(writerIDS.indexOf(contrib), 1);
            this.db.collection("list").doc(this.listID).update({ writerIDS: writerIDS });
        }
        else {
            readerIDS.splice(readerIDS.indexOf(contrib), 1);
            this.db.collection("list").doc(this.listID).update({ readerIDS: readerIDS });
        }
    };
    TodoslistService.prototype.update = function (todo) {
        var tmp = todo;
        tmp.isDone = !tmp.isDone;
        this.todosCollection.doc(todo.id).update(tmp);
    };
    TodoslistService.prototype.delete = function (listeid, todo) {
        return this.todosCollection.doc(todo.id).delete();
    };
    TodoslistService.prototype.getListDoc = function () {
        return this.listDocObs;
    };
    TodoslistService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    TodoslistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TodoslistService);
    return TodoslistService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UsersService = /** @class */ (function () {
    function UsersService(db, authServ) {
        var _this = this;
        this.db = db;
        this.authServ = authServ;
        this.usersCorrespCollection = this.db.collection('users');
        this.usersCorrespObs = this.usersCorrespCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        this.usersCorrespObs.subscribe(function (res) { return _this.usersCorresp = res; });
    }
    UsersService.prototype.addUser = function (newUser) {
        return this.usersCorrespCollection.add(newUser);
    };
    UsersService.prototype.userExist = function (mail) {
        var ret = false;
        this.usersCorresp.forEach(function (val) {
            if (val.email == mail)
                ret = true;
        }, this);
        return ret;
    };
    UsersService.prototype.getUserId = function (mail) {
        var ret;
        this.usersCorresp.forEach(function (val) {
            if (val.email == mail)
                ret = val.uid;
        }, this);
        return ret;
    };
    UsersService.prototype.getUserMail = function (uid) {
        var ret;
        this.usersCorresp.forEach(function (val) {
            if (val.uid == uid)
                ret = val.email;
        }, this);
        return ret;
    };
    UsersService.ctorParameters = function () { return [
        { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=default~contributor-manager-contributor-manager-module~todoslist-todoslist-module-es5.js.map