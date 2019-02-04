import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  router: Router;

  constructor() {
   // this.router = router;
  }

  canActivate() {
    if (localStorage.getItem('logged').localeCompare('true') === 0) {
      return true;
    } else {return false;
      //this.router.navigate(['login']);
    }
  }




}
