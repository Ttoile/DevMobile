import { Injectable } from '@angular/core';
import { Todo} from '../model/todo';
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

  constructor(private db: AngularFirestore) {}

  // /!\ ATTENTION /!\ ce setUp doit absolument être appelé quand on va se servire de todolist pour une nouvelle liste (exemple: dans le constructeur de todolist.page.ts)
  setUp(listeid: string){
    this.listID = listeid;
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

  update(todo: Todo){
    let tmp:Todo = todo;
    tmp.isDone = !tmp.isDone;
    this.todosCollection.doc(todo.id).update(tmp);
  }

  delete(listeid: string, todo: Todo){
    // return this.todosCollection.doc(todo.id).delete();
    return this.todosCollection.doc(todo.id).delete();
    // console.log("TODO REMOVE");
  }

  getListTitle(){ // TODO
    return "TITRE ICI";
  }

}
