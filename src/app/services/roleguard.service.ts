import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AppStorage} from '../objects/app.storage';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const expectedRoles: string[] = route.data.expectedRoles;
    const storage: AppStorage = JSON.parse(localStorage.getItem('user'));

    alert(expectedRoles);

    if (!this.auth.isAuthenticated() || (expectedRoles.indexOf(storage.role) < 0)) {
      this.router.navigate(['login']);

      return false;
    }
    return true;
  }
}
