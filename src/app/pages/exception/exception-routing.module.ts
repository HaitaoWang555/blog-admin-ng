import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareModule } from 'src/app/share/share.module';
import { DefaultModule } from 'src/app/layout/default/default.module';

import { DefaultComponent } from 'src/app/layout/default/default.component';
import { ExceptionComponent } from './exception/exception.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: 'index/:type', component: ExceptionComponent },
    ]
  }
];

@NgModule({
  declarations: [ExceptionComponent],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
    DefaultModule,
  ],
  exports: [RouterModule],
})
export class ExceptionRoutingModule {}
