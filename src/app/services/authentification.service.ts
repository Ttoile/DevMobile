import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  signup(email: string, password: string) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });
  }

  login(email: string, password: string) {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });
  }

  logout() {
    firebase
        .auth()
        .signOut();
  }

}
