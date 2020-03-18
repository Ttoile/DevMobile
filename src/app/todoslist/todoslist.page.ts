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

  param: string;

  private todos: Array<Todo>;

  constructor(private listService: TodoslistService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listService.get().subscribe(res => this.todos = res);
    this.param = this.route.snapshot.paramMap.get('param');
  }

  delete(todo: Todo){
    this.listService.delete(todo);
  }
}
