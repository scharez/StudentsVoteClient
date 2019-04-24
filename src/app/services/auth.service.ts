import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppStorage } from '../objects/app.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() {}

  public isAuthenticated(): boolean {

    const storage: AppStorage = JSON.parse(localStorage.getItem('user'));

    return !this.jwtHelper.isTokenExpired(storage.token);
  }

}
