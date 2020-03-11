import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListslistPage } from './listslist.page';

const routes: Routes = [
  {
    path: '',
    component: ListslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListslistPageRoutingModule {}
