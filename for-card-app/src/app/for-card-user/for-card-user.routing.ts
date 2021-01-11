import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardUserComponent} from './for-card-user.component';
import {UserProfileComponent} from '../for-card-shared/components/user-profile/user-profile.component';
import {HomeComponent} from '../for-card-shared/components/home/home.component';
import {PaymentCardDashboardComponent} from '../for-card-shared/components/payment-card-dashboard/payment-card-dashboard.component';
import {AboutUsComponent} from '../for-card-shared/components/about-us/about-us.component';
import {ContactComponent} from '../for-card-shared/components/contact/contact.component';

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
          {path: '', component: PaymentCardDashboardComponent}
        ]
      },
      {
        path: 'profile',
        children: [
          {path: '', component: UserProfileComponent}
        ]
      },
      {
        path: 'about-us',
        children: [
          {path: '', component: AboutUsComponent}
        ]
      },
      {
        path: 'contact',
        children: [
          {path: '', component: ContactComponent}
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
