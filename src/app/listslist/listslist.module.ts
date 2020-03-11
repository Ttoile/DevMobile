import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListslistPageRoutingModule } from './listslist-routing.module';

import { ListslistPage } from './listslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListslistPageRoutingModule
  ],
  declarations: [ListslistPage]
})
export class ListslistPageModule {}
