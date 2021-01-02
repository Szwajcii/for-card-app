import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './for-card-shared/services/guards/auth.guard';
import {ForCardGuard} from './for-card-shared/services/guards/for-card-guard';
import {ForCardMatcher} from './for-card-shared/services/matcher';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        canActivate: [ForCardGuard],
        matcher: ForCardMatcher.forCardUserMatcher,
        loadChildren: () => import('./for-card-user/for-card-user.module').then(module => module.ForCardUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
