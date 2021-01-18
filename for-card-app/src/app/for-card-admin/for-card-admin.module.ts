import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForCardAdminComponent} from './for-card-admin.component';
import {RouterModule} from '@angular/router';
import {ForCardSharedModule} from '../for-card-shared/for-card-shared.module';
import {ForCardAdminRouting} from './for-card-admin.routing';
import {ForCardMatModule} from '../for-card-shared/modules/for-card-mat.module';
import {UsersComponent} from './components/users/users.component';
import {UsersDatatableComponent} from './components/users/users-datatable/users-datatable.component';
import {PaymentCardsComponent} from './components/payment-cards/payment-cards.component';
import {PaymentCardsDatatableComponent} from './components/payment-cards/payment-cards-datatable/payment-cards-datatable.component';
import {PaymentCardDetailsComponent} from './components/payment-cards/payment-card-details/payment-card-details.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {MessagesComponent} from './components/messages/messages.component';
import {MessageDatatableComponent} from './components/messages/message-datatable/message-datatable.component';
import {ArchivedMessagesComponent} from './components/messages/archived-messages/archived-messages.component';


@NgModule({
  declarations: [
    ForCardAdminComponent,
    UsersComponent,
    UsersDatatableComponent,
    PaymentCardsComponent,
    PaymentCardsDatatableComponent,
    PaymentCardDetailsComponent,
    UserDetailsComponent,
    MessagesComponent,
    MessageDatatableComponent,
    ArchivedMessagesComponent
  ],
  exports: [
    ForCardMatModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ForCardSharedModule,
    ForCardAdminRouting,
    ForCardMatModule
  ]
})
export class ForCardAdminModule { }
