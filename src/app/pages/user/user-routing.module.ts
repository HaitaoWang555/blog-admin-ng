import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShareModule } from './../../share/share.module';

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
  declarations: [UserLayoutComponent, LoginComponent, RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    ShareModule
  ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
