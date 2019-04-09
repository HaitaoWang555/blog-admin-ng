import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiserComponent } from './regiser/regiser.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegiserComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
