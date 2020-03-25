import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContributorManagerPage } from './contributor-manager.page';

const routes: Routes = [
  {
    path: '',
    component: ContributorManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributorManagerPageRoutingModule {}
