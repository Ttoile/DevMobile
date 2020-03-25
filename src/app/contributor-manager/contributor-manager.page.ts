import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contributor-manager',
  templateUrl: './contributor-manager.page.html',
  styleUrls: ['./contributor-manager.page.scss'],
})
export class ContributorManagerPage implements OnInit {

  constructor(private contributorManagerController: ModalController) { }

  ngOnInit() {
  }

  addNewContributor(mail: string){

  }

  close(){
    this.contributorManagerController.dismiss();
  }

}
