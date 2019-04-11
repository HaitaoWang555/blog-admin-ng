import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule',
  },
  {
    path: 'dashboard',
    loadChildren: './pages/pages.module#PagesModule',
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
