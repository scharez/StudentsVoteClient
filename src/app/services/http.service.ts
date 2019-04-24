import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../objects/app.user';
import {Student} from '../Student';
import {Punkte} from '../Punkte';

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

  sendPoints(punkte: Punkte[]) {
    return this.http.post('http://localhost:8080/rest/sv/parseJson', punkte);
  }

  getCandidate() {
    return this.http.get('http://localhost:8080/rest/sv/getFullCandidate', {responseType: Student});
  }

  instanceCVs(itsaclass: string) {
    return this.http.post('http://localhost:8080/rest/sv/instanceCVs', itsaclass);
  }

  persistCVs() {
    return this.http.post('http://localhost:8080/rest/sv/persistCVs');
  }

  endElection() {
    return this.http.post('http://localhost:8080/rest/sv/endElection');
  }
}

