import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardAdminComponent} from './for-card-admin.component';
import {HomeComponent} from '../for-card-shared/components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {PaymentCardsComponent} from './components/payment-cards/payment-cards.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ForCardAdminRouting { }
