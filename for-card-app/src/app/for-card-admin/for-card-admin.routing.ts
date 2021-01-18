import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardAdminComponent} from './for-card-admin.component';
import {HomeComponent} from '../for-card-shared/components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {PaymentCardsComponent} from './components/payment-cards/payment-cards.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {MessagesComponent} from './components/messages/messages.component';
import {ArchivedMessagesComponent} from './components/messages/archived-messages/archived-messages.component';

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
          {path: '', component: UsersComponent},
          {path: 'details/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'payment-cards',
        children: [
          {path: '', component: PaymentCardsComponent}
        ]
      },
      {
        path: 'messages',
        children: [
          {path: '', redirectTo: 'new', pathMatch: 'full'},
          {path: 'new', component: MessagesComponent},
          {path: 'archived', component: ArchivedMessagesComponent}
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
