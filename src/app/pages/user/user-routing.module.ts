import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RegiserComponent } from './regiser/regiser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'user/regiser',
    component: RegiserComponent,
  },
  {
    path: 'user/login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
