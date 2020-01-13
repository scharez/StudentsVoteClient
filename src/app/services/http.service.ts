import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../objects/app.user';
import {Student} from '../Student';
import {Punkte} from '../Punkte';
import {User2} from '../User2';
import {User3} from '../User3';
import {VotingResultPunkte} from '../VotingResultPunkte';

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

  sendPoints(punkteString: Punkte[]) {
    return this.http.post('http://localhost:8080/rest/sv/parseJson', punkteString);
  }

  getCandidates() {
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

  getSchoolClassResults(myRequest: VotingResultPunkte) {
    return this.http.get('http://localhost:8080/rest/sv/getSchoolClassResults');
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

  deleteClass(meinDatum: string) {
     return this.http.post(`http://localhost:8080/rest/sv/deleteClass/${meinDatum}`);
  }

  deleteCandidate(matrikelnummer: string) {
    return this.http.post(`http://localhost:8080/rest/sv/deleteCandidate/${matrikelnummer}`);
  }

  updateCandidate(candidate: Student) {
  this.http.post('http://localhost:8080/rest/sv/updateCandidate', candidate);
  }

  newElection(json: string) {
    this.http.post('http://localhost:8080/rest/sv/createElection', json);
  }

  getFinishedClasses() {
    return this.http.get('http://localhost:8080/rest/sv/getFinishedClasses');
  }

  getVotingClasses() {
    return this.http.get('http://localhost:8080/rest/sv/getVotingClasses');
  }

  createCandidate(candidate: User2) {
    return this.http.post('http://localhost:8080/rest/sv/createCandidate', candidate);
  }

  getCurrentVoteDate() {
    return this.http.get('http://localhost:8080/rest/sv/getCurrentVoteDate');
  }

  createCandidature(candidateplus: User3) {
    return this.http.post('http://localhost:8080/rest/sv/createCandidature', candidateplus);
  }
}
