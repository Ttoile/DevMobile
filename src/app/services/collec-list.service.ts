import { Injectable } from '@angular/core';
import {List, Todo, uid} from '../model/todo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CollecList{

  private listCollection: AngularFirestoreCollection<List>;
  private lists: Observable<Array<List>>;

  constructor(private db: AngularFirestore, private authServ : AuthService) {
    this.listCollection = db.collection<List>('list', ref=>ref.where('ownerID','==',this.authServ.getUserID()));

    this.lists = this.listCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

  getLists(): Observable<Array<List>> {
    return this.lists;
  }

  addList(list: List) {
    return this.listCollection.add(list);
  }

  delete(list: List){
    return this.listCollection.doc(list.id).delete();
  }
  //
  // allowRead(list: List): boolean{
  //   return (list.uids === uid.user) || (list.uids === uid.admin);
  // }
  //
  // allowWrite(list: List){
  //   return (list.uids === uid.admin);
  // }
}
