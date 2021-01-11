import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardAdminComponent} from './for-card-admin.component';
import {HomeComponent} from '../for-card-shared/components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {PaymentCardsComponent} from './components/payment-cards/payment-cards.component';
import {AboutUsComponent} from '../for-card-shared/components/about-us/about-us.component';
import {ContactComponent} from '../for-card-shared/components/contact/contact.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ForCardAdminComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {
        path: 'users',
        children: [
          {path: '', component: UsersComponent}
        ]
      },
      {
        path: 'payment-cards',
        children: [
          {path: '', component: PaymentCardsComponent}
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

export class ForCardAdminRouting { }
