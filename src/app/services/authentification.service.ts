import { Injectable, Output, EventEmitter } from '@angular/core';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
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

  signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .finally(()=>{this.getLoggedInName.emit(this.getUsername())});
  }

  logout() {
    firebase
        .auth()
        .signOut();
    this.router.navigate(['/login']);
  }

  getUsername(){
    return firebase.auth().currentUser?firebase.auth().currentUser.email:"";
  }

  getUserID(){
    return firebase.auth().currentUser?firebase.auth().currentUser.uid:"";
  }

  isConnected(){
    return firebase.auth().currentUser?true:false;
  }

  resetPassword(email: string){
    return firebase.auth().sendPasswordResetEmail(email);
  }

}
