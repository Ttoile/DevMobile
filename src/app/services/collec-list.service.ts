import { Injectable, Output, EventEmitter } from '@angular/core';
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
  private listWatchOnlyCollection: AngularFirestoreCollection<List>;
  private listSharedCollection: AngularFirestoreCollection<List>;

  private lists: Observable<Array<List>>;
  private listsWatchOnly: Observable<Array<List>>;
  private listsShared: Observable<Array<List>>;

  @Output() getDatabaseReloaded: EventEmitter<any> = new EventEmitter();

  constructor(private db: AngularFirestore, private authServ : AuthService) {
    this.authServ.getLoggedInName.subscribe(event => {this.getDatabase();});
    this.getDatabase();
  }

  getDatabase(){
    this.listCollection = this.db.collection<List>('list', ref=>ref.where('ownerID','==',this.authServ.getUserID()));
    this.listWatchOnlyCollection = this.db.collection<List>('list', ref=>ref.where('readerIDS','array-contains',this.authServ.getUserID()));
    this.listSharedCollection = this.db.collection<List>('list', ref=>ref.where('writerIDS','array-contains',this.authServ.getUserID()));

    this.lists = this.listCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
    this.listsWatchOnly = this.listWatchOnlyCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
    this.listsShared =  this.listSharedCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
    this.getDatabaseReloaded.emit("done");
  }

  getLists(): Observable<Array<List>> {
    return this.lists;
  }

  getListsWatchOnly(): Observable<Array<List>> {
    return this.listsWatchOnly;
  }

  getListsShared(): Observable<Array<List>> {
    return this.listsShared;
  }

  addList(list: List) {
    let ret = this.listCollection.add(list);
    this.getDatabase();
    return ret;
  }

  delete(list: List){
    return this.listCollection.doc(list.id).delete();
  }

  getListById(id: string){
    let test = this.db.collection<List>('list', ref=>ref.where('id','==',id));
    return test.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }

}
