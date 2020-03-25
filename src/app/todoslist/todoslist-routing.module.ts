import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoslistPage } from './todoslist.page';
import { ContributorManagerPageModule } from '../contributor-manager/contributor-manager.module';

const routes: Routes = [
  {
    path: '',
    component: TodoslistPage
  },
  {
    path: ':param',
    component: TodoslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ContributorManagerPageModule],
  exports: [RouterModule],
})
export class TodoslistPageRoutingModule {}
