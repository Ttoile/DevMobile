import { Injectable } from '@angular/core';
import { Todo, List} from '../model/todo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TodoslistService {

  private listID: string;

  private todosCollection: AngularFirestoreCollection<Todo>;
  private todos: Observable<Array<Todo>>;
  private listDocObs;
  private listDoc;

  constructor(private db: AngularFirestore) {}

  // /!\ ATTENTION /!\ ce setUp doit absolument être appelé quand on va se servir de todolist pour une nouvelle liste (exemple: dans le constructeur de todolist.page.ts)
  setUp(listeid: string){
    this.listID = listeid;
    this.listDocObs = this.db.collection("list").doc(this.listID).valueChanges();
    this.listDocObs.subscribe(res => this.listDoc = res);
    this.todosCollection = this.db.collection("list").doc(listeid).collection<Todo>("todos");
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  get(id: string): Observable<Array<Todo>> {
    return this.todos;
  }

  add(listeid:string, todo: Todo) {
    return this.todosCollection.add(todo);
  }

  addContributor(uid: string, write: boolean){ // // if write == true, contributor can read and write, otherwise he can just read
    let writerIDS: Array<string> = this.listDoc.writerIDS;
    let readerIDS: Array<string> = this.listDoc.readerIDS;
    if(writerIDS.indexOf(uid) == -1 && readerIDS.indexOf(uid) == -1 && this.listDoc.ownerID !== uid){
      if(write){
        writerIDS.push(uid);
        this.db.collection("list").doc(this.listID).update({writerIDS});
        return true;
      }else{
        readerIDS.push(uid);
        this.db.collection("list").doc(this.listID).update({readerIDS});
        return true;
      }
    }else{
      return false;
    }
  }

  getContributorsRead(){
    return this.listDoc.readerIDS;
  }

  getContributorsWrite(){
    return this.listDoc.writerIDS;
  }

  getContributors(){
    return this.listDoc.writerIDS.concat(this.listDoc.readerIDS);
  }

  removeContributor(contrib: string){
    let writerIDS: Array<string> = this.listDoc.writerIDS;
    let readerIDS: Array<string> = this.listDoc.readerIDS;
    if(writerIDS.indexOf(contrib) != -1){
      writerIDS.splice(writerIDS.indexOf(contrib),1);
      this.db.collection("list").doc(this.listID).update({writerIDS});
    }else{
      readerIDS.splice(readerIDS.indexOf(contrib),1);
      this.db.collection("list").doc(this.listID).update({readerIDS});
    }
  }

  update(todo: Todo){
    let tmp:Todo = todo;
    tmp.isDone = !tmp.isDone;
    this.todosCollection.doc(todo.id).update(tmp);
  }

  delete(listeid: string, todo: Todo){
    return this.todosCollection.doc(todo.id).delete();
  }

  getListDoc(){
    return this.listDocObs;
  }

}
