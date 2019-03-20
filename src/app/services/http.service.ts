import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../objects/app.user';
import {Student} from '../Student';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http;

  constructor(http: HttpClient) {
    this.http = http;
  }

  loginCheck(user: User) {
    return this.http.post('http://7a1018a9.ngrok.io/rest/sv/login', user);
}

  insert(candidate: Student) {
    return this.http.post('http://7a1018a9.ngrok.io/rest/sv/setCandidate', candidate);
  }

  getCandidates() {
    return this.http.get('http://localhost:8080/rest/sv/getFullCandidate', {responseType: Student});
  }

}

