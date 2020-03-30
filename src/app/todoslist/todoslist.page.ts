import { Component, OnInit } from '@angular/core';
import { Todo, List } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContributorManagerPage } from '../contributor-manager/contributor-manager.page';
import { CollecList } from '../services/collec-list.service';
import { AuthService } from '../services/authentification.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  private listID: string;
  private listTitle: string;
  private listOwner: string;
  private listReaderID: Array<String>;
  private listWriterID: Array<String>;
  private isWriter: boolean;
  private isReader: boolean;

  private obsList: Observable<List>;

  private todos: Array<Todo>;

  constructor(private listService: TodoslistService,private authServ : AuthService, private route: ActivatedRoute, private contributorManagerController: ModalController) {}

  // TODO : Idea, here prepare the TodoslistService by sending it the LIST ID with a function that set it up
  ngOnInit(): void {
    this.listID = this.route.snapshot.paramMap.get('param');
    this.listService.setUp(this.listID); // ESSENTIEL (Go voir les sources)
    this.listService.getListDoc().subscribe(res => { // Find a way to remove err message
      this.listTitle = res.title;
      this.listOwner = res.ownerID;
      this.isWriter = res.writerIDS.indexOf(this.authServ.getUserID()) !== -1;
      this.isReader = res.readerIDS.indexOf(this.authServ.getUserID()) !== -1;
    });
    this.listService.get(this.listID).subscribe(res => this.todos = res);
  }

  delete(todo: Todo){
    this.listService.delete(this.listID, todo);
  }

  update(todo: Todo){
    this.listService.update(todo);
  }

  debug(){
    // console.log(this.listService.getListTitle());
  }

  canAddTodo(){
    return this.isOwner() || (this.isWriter);
  }

  isOwner(){
    return this.authServ.getUserID() == this.listOwner;
  }

  async openContributorManager(){
    const modal = await this.contributorManagerController.create({
      component: ContributorManagerPage
    });
    return await modal.present();
  }
}
