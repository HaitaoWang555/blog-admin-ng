import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareModule } from 'src/app/share/share.module';
import { DefaultModule } from 'src/app/layout/default/default.module';

import { DefaultComponent } from 'src/app/layout/default/default.component';


import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: 'index', component: DashboardComponent, data: { title: '首页' } },
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
    DefaultModule,
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
