import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContributorManagerPageRoutingModule } from './contributor-manager-routing.module';

import { ContributorManagerPage } from './contributor-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContributorManagerPageRoutingModule
  ],
  declarations: [ContributorManagerPage]
})
export class ContributorManagerPageModule {}
