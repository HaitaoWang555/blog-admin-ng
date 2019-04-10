import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLayoutComponent } from '../../layout/user-layout/user-layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: '登录' } },
      { path: 'register', component: RegisterComponent, data: { title: '注册' } },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
