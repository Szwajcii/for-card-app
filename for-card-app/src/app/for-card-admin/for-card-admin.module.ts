import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForCardAdminComponent} from './for-card-admin.component';
import {RouterModule} from '@angular/router';
import {ForCardSharedModule} from '../for-card-shared/for-card-shared.module';
import {ForCardAdminRouting} from './for-card-admin.routing';
import {ForCardMatModule} from '../for-card-shared/modules/for-card-mat.module';



@NgModule({
  declarations: [ForCardAdminComponent],
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
