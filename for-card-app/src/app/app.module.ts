import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ForCardSharedModule} from './for-card-shared/for-card-shared.module';
import {ForCardMatModule} from './for-card-shared/modules/for-card-mat.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ForCardSharedModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [
    ForCardMatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
