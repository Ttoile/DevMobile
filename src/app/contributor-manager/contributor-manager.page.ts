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

  private timeBeforeMessagesDisapear = 3000;
  private hideErrMessage: boolean;
  private hideSuccessMessage: boolean;
  private hideFailedMessage: boolean;
  private errMessage: string = "Unkown user, please try again";
  private successMessage: string = "Contributor added successfully";
  private failedMessage: string = "This user is already a contributor";

  private toggleLegend: string = "Read Only";
  private toggleVal: boolean = false; // False = read only, true = read and write

  constructor(private contributorManagerController: ModalController, private users: UsersService, private todolistService: TodoslistService) { }

  ngOnInit() {
    this.hideErrMessage = true;
    this.hideSuccessMessage = true;
    this.hideFailedMessage = true;
  }

  addNewContributor(mail: string){
    if(this.emailExist(mail)){
      this.hideErrMessage = true;
      this.hideFailedMessage = true;
      this.hideSuccessMessage = true;
      if(this.todolistService.addContributor(this.users.getUserId(mail), this.toggleVal)){
        this.hideSuccessMessage = false;
        setTimeout(() => {this.hideSuccessMessage = true;}, this.timeBeforeMessagesDisapear);
      }else{
        this.hideFailedMessage = false;
        setTimeout(() => {this.hideFailedMessage = true;}, this.timeBeforeMessagesDisapear);
      }
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
