import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForCardUserComponent} from './for-card-user.component';
import {RouterModule} from '@angular/router';
import {ForCardSharedModule} from '../for-card-shared/for-card-shared.module';
import {ForCardUserRouting} from './for-card-user.routing';
import {ForCardMatModule} from '../for-card-shared/modules/for-card-mat.module';



@NgModule({
  declarations: [ForCardUserComponent],
  exports: [
    ForCardMatModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ForCardUserRouting,
    ForCardSharedModule,
    ForCardMatModule
  ]
})
export class ForCardUserModule { }
