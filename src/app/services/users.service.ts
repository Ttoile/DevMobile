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
  private usersCorresp: Observable<Array<User>>;

  constructor(private db: AngularFirestore, private authServ : AuthService) {
    this.usersCorrespCollection = this.db.collection<User>('users');
    this.usersCorresp = this.usersCorrespCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  addUser(newUser: User){
    return this.usersCorrespCollection.add(newUser);
  }

}
