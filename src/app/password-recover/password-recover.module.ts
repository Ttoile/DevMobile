import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordRecoverPageRoutingModule } from './password-recover-routing.module';

import { PasswordRecoverPage } from './password-recover.page';
import { HeaderModule } from '../small-components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordRecoverPageRoutingModule,
    HeaderModule
  ],
  declarations: [PasswordRecoverPage]
})
export class PasswordRecoverPageModule {}
