import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtodoPageRoutingModule } from './addtodo-routing.module';

import { AddtodoPage } from './addtodo.page';
import { HeaderModule } from '../small-components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtodoPageRoutingModule,
    HeaderModule
  ],
  declarations: [AddtodoPage]
})
export class AddtodoPageModule {}
