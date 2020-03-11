import { Component, OnInit } from '@angular/core';
import {TodoslistService} from '../services/todoslist.service';
import {Router} from '@angular/router';
import {List} from '../model/todo';
import {CollecList} from '../services/collec-list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  title: string;

  constructor(private listService: CollecList,
              private router: Router) { }

  ngOnInit() {
  }

  addList(){
    const list = { title: this.title} as List;
    this.listService.addList(list);
    this.router.navigate(['listslist']);
  }

}
