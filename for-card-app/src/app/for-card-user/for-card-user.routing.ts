import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardUserComponent} from './for-card-user.component';
import {PaymentCardComponent} from '../for-card-shared/components/payment-card/payment-card.component';
import {UserProfileComponent} from '../for-card-shared/components/user-profile/user-profile.component';
import {HomeComponent} from '../for-card-shared/components/home/home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ForCardUserComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'payment-cards',
        children: [
          {path: '', component: PaymentCardComponent}
        ]
      },
      {
        path: 'profile',
        children: [
          {path: '', component: UserProfileComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ForCardUserRouting { }
