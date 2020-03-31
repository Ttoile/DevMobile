import { Injectable } from '@angular/core';
import { Todo, List} from '../model/todo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    if(write){
      let writerIDS: Array<string> = this.listDoc.writerIDS;
      writerIDS.push(uid);
      this.listDocObs = this.db.collection("list").doc(this.listID).update({writerIDS});
    }else{
      let readerIDS: Array<string> = this.listDoc.readerIDS;
      readerIDS.push(uid);
      this.listDocObs = this.db.collection("list").doc(this.listID).update({readerIDS});
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

  getListDoc(){ // TODO
    return this.listDocObs;
  }

}
