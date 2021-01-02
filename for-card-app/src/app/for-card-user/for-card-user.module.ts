import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForCardUserComponent} from './for-card-user.component';
import {RouterModule} from '@angular/router';
import {ForCardSharedModule} from '../for-card-shared/for-card-shared.module';
import {ForCardUserRouting} from './for-card-user.routing';



@NgModule({
  declarations: [ForCardUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ForCardUserRouting,
    ForCardSharedModule
  ]
})
export class ForCardUserModule { }
