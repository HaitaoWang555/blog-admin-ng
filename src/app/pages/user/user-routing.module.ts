import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegiserComponent } from './regiser/regiser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'regiser',
    component: RegiserComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
