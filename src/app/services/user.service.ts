import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: LocalStorageService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const init = !!this.store.get('user');
    console.log(init);
    console.log(state.url);

    if (state.url.includes('user') && init) {
      this.router.navigateByUrl('/dashboard/index');
      return false;
    }
    if (!state.url.includes('user') && !init) {
      this.router.navigateByUrl('/user/login');
      return false;
    }

    return true;
  }

}
