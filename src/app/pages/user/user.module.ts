import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';


// layout modules
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    LayoutModule
  ]
})
export class UserModule { }
