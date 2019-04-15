import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { USER_NAMESPACE } from './local-storage.namespace';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private store: LocalStorageService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const init = !!this.store.get(USER_NAMESPACE);

    if (state.url.includes(USER_NAMESPACE) && init) {
      this.router.navigateByUrl('/dashboard/index');
      return false;
    }
    if (!state.url.includes(USER_NAMESPACE) && !init) {
      this.router.navigateByUrl('/user/login');
      return false;
    }

    return true;
  }

}
