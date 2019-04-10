import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareModule } from 'src/app/share/share.module';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
