import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { TodoslistService } from '../services/todoslist.service';

@Component({
  selector: 'app-contributor-manager',
  templateUrl: './contributor-manager.page.html',
  styleUrls: ['./contributor-manager.page.scss'],
})
export class ContributorManagerPage implements OnInit {

  private hideErrMessage: boolean;
  private errMessage: string = "Unkown user, please try again";

  private toggleLegend: string = "Read Only";
  private toggleVal: boolean = false; // False = read only, true = read and write

  constructor(private contributorManagerController: ModalController, private users: UsersService, private todolistService: TodoslistService) { }

  ngOnInit() {
    this.hideErrMessage = true;
  }

  addNewContributor(mail: string){
    if(this.emailExist(mail)){
      this.hideErrMessage = true;
      console.log("ADDING CONTRIBUTOR");
      this.todolistService.addContributor(this.users.getUserId(mail), this.toggleVal);
    }else{
      this.hideErrMessage = false;
    }
  }

  emailExist(email: string){
    return this.users.userExist(email);
  }

  toggleChange(){
    if(this.toggleLegend == "Read Only")
      this.toggleLegend = "Read and Write";
    else
      this.toggleLegend = "Read Only";
    this.toggleVal = !this.toggleVal;
    console.log(this.toggleVal);
  }

  close(){
    this.contributorManagerController.dismiss();
  }

}
