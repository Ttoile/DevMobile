import { Component, OnInit } from '@angular/core';
import {List, Todo} from '../model/todo';
import {TodoslistService} from '../services/todoslist.service';
import {CollecList} from '../services/collec-list.service';

@Component({
  selector: 'app-listslist',
  templateUrl: './listslist.page.html',
  styleUrls: ['./listslist.page.scss'],
})
export class ListslistPage implements OnInit {

  private lists: Array<List>;

  constructor(private listService: CollecList) {}

  ngOnInit(): void {
    this.listService.getLists().subscribe(res => this.lists = res);
  }

  delete(list: List){
    this.listService.delete(list);
  }

}
