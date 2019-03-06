import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../objects/app.user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http;

  constructor(http: HttpClient) {
    this.http = http;
  }

loginCheck(user: User) {
    return this.http.post('http://localhost:8080/rest/sv/login', user);
  }

}
