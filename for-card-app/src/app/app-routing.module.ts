import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './for-card-shared/services/guards/auth.guard';
import {ForCardGuard} from './for-card-shared/services/guards/for-card-guard';
import {ForCardMatcher} from './for-card-shared/services/matcher';
import {Role} from './for-card-shared/model/role.model';
import {HomeComponent} from './for-card-shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        canActivate: [ForCardGuard],
        data: {roles: [Role.USER]},
        matcher: ForCardMatcher.forCardUserMatcher,
        loadChildren: () => import('./for-card-user/for-card-user.module').then(module => module.ForCardUserModule)
      },
      {
        canActivate: [ForCardGuard],
        data: {roles: [Role.ADMIN]},
        matcher: ForCardMatcher.forCardAdminMatcher,
        loadChildren: () => import('./for-card-admin/for-card-admin.module').then(module => module.ForCardAdminModule)
      }
    ]
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
