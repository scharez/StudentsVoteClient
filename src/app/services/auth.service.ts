import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  canActivate() {
    if (localStorage.getItem('logged').localeCompare('true') === 0) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }




}
