import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { TodoslistService } from '../services/todoslist.service';
import { ContributorRights } from '../model/todo';

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

  private contributorsRights: Array<ContributorRights> = [];

  constructor(private contributorManagerController: ModalController, private users: UsersService, private todolistService: TodoslistService) { }

  ngOnInit() {
    this.hideErrMessage = true;
    this.hideSuccessMessage = true;
    this.hideFailedMessage = true;
    setTimeout(() => {
      this.updateContributorsDisplay();
    }, 500);
  }

  updateContributorsDisplay(){
      let tmp: Array<string> = this.todolistService.getContributorsRead();
      for(let i = 0; i<tmp.length; i++)
        this.contributorsRights.push({contributorName:this.users.getUserMail(tmp[i]), permission: false});
      tmp = this.todolistService.getContributorsWrite();
      for(let i = 0; i<tmp.length; i++)
        this.contributorsRights.push({contributorName:this.users.getUserMail(tmp[i]), permission: true});
      console.log(this.contributorsRights);
  }

  addNewContributor(mail: string){
    if(this.emailExist(mail)){
      this.hideErrMessage = true;
      this.hideFailedMessage = true;
      this.hideSuccessMessage = true;
      if(this.todolistService.addContributor(this.users.getUserId(mail), this.toggleVal)){
        this.hideSuccessMessage = false;
        this.updateContributorsDisplay();
        setTimeout(() => {this.hideSuccessMessage = true;}, this.timeBeforeMessagesDisapear);
      }else{
        this.hideFailedMessage = false;
        this.updateContributorsDisplay();
        setTimeout(() => {this.hideFailedMessage = true;}, this.timeBeforeMessagesDisapear);
      }
    }else{
      this.hideErrMessage = false;
    }
  }

  removeContributor(contrib: string){
    this.todolistService.removeContributor(this.users.getUserId(contrib));
    this.updateContributorsDisplay();
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
  }

  close(){
    this.contributorManagerController.dismiss();
  }

}
