import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../objects/app.user';
import {Student} from '../Student';
import {Punkte} from '../Punkte';
import {User2} from '../User2';

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

  endElectionTeacher() {
     this.http.post('http://localhost:8080/rest/sv/endElectionTeacher');
  }

  postFile(file: File) {

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('http://localhost:8080/rest/sv/uploadCSV', formData);
  }

  createCandidate(candidate: User2) {
    return this.http.post('http://localhost:8080/rest/sv/setCandidate', candidate);
  }
}
