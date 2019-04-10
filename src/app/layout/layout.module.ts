import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ RouterModule ]
})
export class LayoutModule { }
