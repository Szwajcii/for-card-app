import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForCardUserComponent} from './for-card-user.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ForCardUserComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ForCardUserRouting { }
