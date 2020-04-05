import { Component, OnInit } from '@angular/core';
import {List} from '../model/todo';
import {CollecList} from '../services/collec-list.service';
import { AuthService } from '../services/authentification.service';

@Component({
  selector: 'app-listslist',
  templateUrl: './listslist.page.html',
  styleUrls: ['./listslist.page.scss'],
})
export class ListslistPage implements OnInit {

  private lists: Array<List>;
  private listsWatchOnly: Array<List>;
  private listsShared: Array<List>;

  constructor(private listService: CollecList, private auth: AuthService) {
    this.listService.getDatabaseReloaded.subscribe(() => {this.getListsFromService()});
    this.getListsFromService();
  }

  ngOnInit(): void {
  }

  getListsFromService(){
    this.listService.getLists().subscribe(res => this.lists = res);
    this.listService.getListsWatchOnly().subscribe(res => this.listsWatchOnly = res);
    this.listService.getListsShared().subscribe(res => this.listsShared = res);
  }

  delete(list: List){
    this.listService.delete(list);
  }

}
