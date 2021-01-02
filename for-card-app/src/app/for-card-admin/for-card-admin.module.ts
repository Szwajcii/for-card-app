import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForCardAdminComponent} from './for-card-admin.component';
import {RouterModule} from '@angular/router';
import {ForCardSharedModule} from '../for-card-shared/for-card-shared.module';
import {ForCardAdminRouting} from './for-card-admin.routing';



@NgModule({
  declarations: [ForCardAdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    ForCardSharedModule,
    ForCardAdminRouting
  ]
})
export class ForCardAdminModule { }
