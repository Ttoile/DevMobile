import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContributorManagerPage } from '../contributor-manager/contributor-manager.page';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  listID: string;
  listTitle: string;

  private todos: Array<Todo>;

  constructor(private listService: TodoslistService, private route: ActivatedRoute, private contributorManagerController: ModalController) {}

  // TODO : Idea, here prepare the TodoslistService by sending it the LIST ID with a function that set it up
  ngOnInit(): void {
    this.listID = this.route.snapshot.paramMap.get('param');
    this.listService.setUp(this.listID); // ESSENTIEL (Go voir les sources)
    this.listTitle = this.listService.getListTitle();
    this.listService.get(this.listID).subscribe(res => this.todos = res);
  }

  delete(todo: Todo){
    this.listService.delete(this.listID, todo);
  }

  update(todo: Todo){
    this.listService.update(todo);
  }

  debug(){
    console.log(this.listService.getListTitle());
  }

  // TODO
  isOwner(){
    return true;
  }

  async openContributorManager(){
    const modal = await this.contributorManagerController.create({
      component: ContributorManagerPage
    });
    return await modal.present();
  }
}
