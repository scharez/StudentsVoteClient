import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AppStorage} from '../objects/app.storage';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRoles: string[] = route.data.expectedRole;
    const storage: AppStorage = JSON.parse(localStorage.getItem('user'));

    if (!this.auth.isAuthenticated() || expectedRoles.indexOf(storage.role) === -1) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
