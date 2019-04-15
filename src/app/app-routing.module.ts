import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule',
    canActivate: [ UserService ],
  },
  {
    path: 'dashboard',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [ UserService ],
  },
  {
    path: 'exception',
    loadChildren: './pages/exception/exception.module#ExceptionModule',
  },
  { path: '', redirectTo: '/dashboard/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/index' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
