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
  private hideSuccessMessage: boolean;
  private errMessage: string = "Unkown user, please try again";
  private successMessage: string = "Contributor added successfully";

  private toggleLegend: string = "Read Only";
  private toggleVal: boolean = false; // False = read only, true = read and write

  constructor(private contributorManagerController: ModalController, private users: UsersService, private todolistService: TodoslistService) { }

  ngOnInit() {
    this.hideErrMessage = true;
    this.hideSuccessMessage = true;
  }

  addNewContributor(mail: string){
    if(this.emailExist(mail)){
      this.hideErrMessage = true;
      this.todolistService.addContributor(this.users.getUserId(mail), this.toggleVal);
      this.hideSuccessMessage = false;
      setTimeout(() => {this.hideSuccessMessage = true;}, 2000)
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
