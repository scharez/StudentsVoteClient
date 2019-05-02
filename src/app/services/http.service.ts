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
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/login', user);
  }

  insert(dataString: Student) {
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/setCandidate', dataString);
  }

  sendPoints(punkteString: Punkte[]) {
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/parseJson', punkteString);
  }

  getCandidate() {
    return this.http.get('http://ab265e2f.ngrok.io/rest/sv/getFullCandidate', {responseType: Student});
  }

  instanceCVs(itsaclass: string) {
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/instanceCVs', itsaclass);
  }

  persistCVs() {
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/persistCVs');
  }

  endElection() {
    return this.http.post('http://ab265e2f.ngrok.io/rest/sv/endElection');
  }

}
