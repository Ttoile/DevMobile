import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {

  listeID: string;
  title: string;

  constructor(private listService: TodoslistService,
    private location: Location) { }

  ngOnInit() {
  }

  addTodo(){
    let item = { title: this.title, isDone: false } as Todo;
    this.listService.add(this.listeID, item);
    this.location.back();
    // this.router.navigate(['todoslist']);
  }
}
