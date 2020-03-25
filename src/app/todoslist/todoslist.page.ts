import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  listeID: string;

  private todos: Array<Todo>;

  constructor(private listService: TodoslistService, private route: ActivatedRoute) {}

  // TODO : Idea, here prepare the TodoslistService by sending it the LIST ID with a function that set it up
  ngOnInit(): void {
    this.listeID = this.route.snapshot.paramMap.get('param');
    this.listService.setUp(this.listeID); // ESSENTIEL (Go voir les sources)
    this.listService.get(this.listeID).subscribe(res => this.todos = res);
  }

  delete(todo: Todo){
    this.listService.delete(this.listeID, todo);
  }

  update(todo: Todo){
    this.listService.update(todo);
  }
}
