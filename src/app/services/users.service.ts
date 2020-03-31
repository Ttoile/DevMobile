import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './authentification.service';
import { User } from '../model/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersCorrespCollection: AngularFirestoreCollection<User>;
  private usersCorrespObs: Observable<Array<User>>;
  private usersCorresp: Array<User> = null;

  constructor(private db: AngularFirestore, private authServ : AuthService) {
    this.usersCorrespCollection = this.db.collection<User>('users');
    this.usersCorrespObs = this.usersCorrespCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.usersCorrespObs.subscribe(res => this.usersCorresp = res);
  }

  addUser(newUser: User){
    return this.usersCorrespCollection.add(newUser);
  }

  userExist(mail: string){
    let ret: boolean = false;
    this.usersCorresp.forEach(val => {
      if(val.email == mail)
        ret = true;
    }, this);
    return ret;
  }

  getUserId(mail: string){
    let ret: string;
    this.usersCorresp.forEach(val => {
      if(val.email == mail)
        ret = val.uid;
    }, this);
    return ret;
  }

}
