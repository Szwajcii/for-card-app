import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class ForCardAdminRouting { }
