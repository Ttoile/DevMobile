import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListslistPageRoutingModule } from './listslist-routing.module';

import { ListslistPage } from './listslist.page';
import {HeaderModule} from '../small-components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListslistPageRoutingModule,
    HeaderModule
  ],
  declarations: [ListslistPage]
})
export class ListslistPageModule {}
