import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormGroupComponent} from './components/form-group/form-group.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {HomeComponent} from './components/home/home.component';
import {CardNumberPipe} from './services/card-number.pipe';
import {DatePipe, DateTimePipe, PaymentCardDatePipe} from './services/date.pipe';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {PaymentCardComponent} from './components/payment-card-dashboard/payment-card/payment-card.component';
import {PaymentCardFormComponent} from './components/payment-card-dashboard/payment-card/payment-card-form/payment-card-form.component';
import {FormGroupHelperService} from './services/form-group-helper.service';
import {ForCardMatModule} from './modules/for-card-mat.module';
import {AuthComponent} from './components/auth/auth.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {UserCanAccessDirective} from './directives/user-can-access.directive';
import {UserProfileFormComponent} from './components/user-profile/user-profile-form/user-profile-form.component';
import {PaymentCardDashboardComponent} from './components/payment-card-dashboard/payment-card-dashboard.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactFormComponent} from './components/contact/contact-form/contact-form.component';

@NgModule({
  declarations: [
    FormGroupComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    CardNumberPipe,
    DatePipe,
    DateTimePipe,
    PaymentCardDatePipe,
    UserProfileComponent,
    PaymentCardComponent,
    PaymentCardFormComponent,
    AuthComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    UserCanAccessDirective,
    UserProfileFormComponent,
    PaymentCardDashboardComponent,
    ContactComponent,
    AboutUsComponent,
    ContactFormComponent
  ],
  exports: [
    CardNumberPipe,
    DatePipe,
    DateTimePipe,
    PaymentCardDatePipe,
    ForCardMatModule,
    UserCanAccessDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ForCardMatModule
  ],
  providers: [
    FormGroupHelperService
  ]
})

export class ForCardSharedModule {
}
