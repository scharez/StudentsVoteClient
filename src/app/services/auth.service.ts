import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router) {}

  canActivate() {
    if (localStorage.getItem('logged').localeCompare('true') === 0) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }




}
