import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'listslist', pathMatch: 'full' },
  {
    path: 'todoslist',
    loadChildren: () => import('./todoslist/todoslist.module').then( m => m.TodoslistPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'addtodo',
    loadChildren: () => import('./addtodo/addtodo.module').then( m => m.AddtodoPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'listslist',
    loadChildren: () => import('./listslist/listslist.module').then( m => m.ListslistPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'add-list',
    loadChildren: () => import('./add-list/add-list.module').then( m => m.AddListPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'contributor-manager',
    loadChildren: () => import('./contributor-manager/contributor-manager.module').then( m => m.ContributorManagerPageModule)
  },
  {
    path: 'password-recover',
    loadChildren: () => import('./password-recover/password-recover.module').then( m => m.PasswordRecoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
