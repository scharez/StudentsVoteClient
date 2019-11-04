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

  setCandidate(dataString: Student) {
    return this.http.post('http://localhost:8080/rest/sv/setCandidate', dataString);
  }

  sendPoints(punkteString: Punkte[]) {
    return this.http.post('http://localhost:8080/rest/sv/parseJson', punkteString);
  }

  getCandidates() {                  // what is this shit doing
    return this.http.get('http://localhost:8080/rest/sv/getCandidates');
  }

  instanceCVs(itsaclass: string) {
    return this.http.post('http://localhost:8080/rest/sv/instanceCVs', itsaclass);
  }

  persistCVs() {
    return this.http.post('http://localhost:8080/rest/sv/persistCVs');
  }

  endElection() {
     this.http.post('http://localhost:8080/rest/sv/endElection');
  }

  getCVs() {
    return this.http.get('http://localhost:8080/rest/sv/getCVs');
  }

  beginElection() {
     this.http.post('http://localhost:8080/rest/sv/startElection');
  }

  endElection4Teacher() {
     this.http.post('http://localhost:8080/rest/sv/endElectionTeacher');
  }

  deleteClass(className: string) {
     return this.http.post('http://localhost:8080/rest/sv/deleteClass', className);
  }

  newElection() {
    this.http.post('http://localhost:8080/rest/sv/newElection');
  }

  runOff() {
    this.http.post('http://localhost:8080/rest/sv/runOff');
  }
}
