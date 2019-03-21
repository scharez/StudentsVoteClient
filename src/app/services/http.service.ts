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
    return this.http.post('http://localhost:8080/rest/sv/login', user);
  }

  insert(dataString: Student) {
    return this.http.post('http://localhost:8080/rest/sv/setCandidate', dataString);
  }

  sendPoints(punkteString: String) {
    return this.http.post('http://localhost:8080/rest/sv/parseJson', punkteString);
  }

  getCandidate() {
    return this.http.get('http://localhost:8080/rest/sv/getFullCandidate', {responseType: Student});
  }

}
