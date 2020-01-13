import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Student} from '../Student';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';
import {User2} from '../User2';
import {User3} from '../User3';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})


export class UpdateComponent implements OnInit {


  studentIdent: string;


  /*Für Klassenauswahl nach Abteilungen*/
  classes: string[] = new Array<string>(50);
  medientechnikClass: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM', '5BHITM'];
  informatikClass: string[] = ['1AHIF', '1BHIF', '1CHIF', '2AHIF', '2BHIF', '2CHIF', '3AHIF', '3BHIF', '3CHIF', '4AHIF', '4BHIF'];
  elektronikClass: string[] = ['1AHEL', '2AHEL', '3AHEL', '4AHEL', '5AHEL'];
  medizintechnikClass: string[] = ['1AHBG', '2AHBG', '3AHBG', '4AHBG', '5AHBG'];
  options: string[] = ['Elektronik', 'Informatik', 'Medientechnik', 'Medizintechnik'];

  httpService: HttpService;

  /*Formular Daten*/
  firstName = '';
  lastName = '';
  sDepartment = '';
  sClass = '';
  sMatrikelNr = '';
  sWahlversprechen = '';
  sImage = '';

  positions: string[] = ['Schulsprecher', 'AbteilungssprecherE', 'AbteilungssprecherI'];
  cposition = '';

  updateCandidate: Student = new Student();

  textTest: String;
  ret: string

  date: string;

  /*Schüler Array*/
  studentNew: Student = new Student();
  dataString: String = '';
  candidate: User2 = new class implements User2 {
    firstname: string;
    lastname: string;
    username: string;
  };

  candidateplus: User3 = new class implements User3 {
    electionPromis: string;
    electionType: string;
    file: File;
    planneddate: string;
    schoolClassName: string;
    username: string;
  }


  constructor(private http: HttpClient, httpService: HttpService, private dataservice: DataService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.dataservice.candidateEmitter.subscribe(candidate => this.putCandidates(candidate));
    this.dowloadStudents();
  }

  putCandidates(candidate){
    console.log(candidate.candidateClass)
    this.firstName = candidate.firstname;
    this.lastName = candidate.lastname;
    this.sDepartment = candidate.department;
    this.sClass = candidate.candidateClass;
    this.sMatrikelNr = candidate.username;
    this.sWahlversprechen = candidate.electionPromise;
    this.cposition = candidate.position;
    console.log(this.sClass);
    this.getDepartment();

  }



  /*jeder Schüler hat eine eigene ID*/
  schuelerId(i): string {
    this.studentIdent = 'schueler' + i;
    log(this.studentIdent);
    return this.studentIdent;
  }


  /*Herunterladen von schon eingetragenen Schülern*/
  dowloadStudents() {
    this.httpService.getCandidates().subscribe(existingcandidates => function (existingcandidates) {
      alert("hey");
    });
  }


  /*Schüler wird mit seinen Daten in Array gespeichert*/
  addStudentValues() {
    this.studentNew.username = this.sMatrikelNr;
    this.studentNew.firstname = this.firstName;
    this.studentNew.lastname = this.lastName;
    this.studentNew.candidateClass = this.sClass;
    this.studentNew.department = this.sDepartment;
    this.studentNew.electionPromise = this.sWahlversprechen;
    this.studentNew.picture = this.sImage;
    this.studentNew.position = this.cposition;

    this.checkForm();
  }

  /*Abteilungen abspeichern*/
  getDepartment() {
    if (this.sDepartment === 'Medientechnik') {
      this.classes = this.medientechnikClass;
    } else if (this.sDepartment === 'Informatik') {
      this.classes = this.informatikClass;
    } else if (this.sDepartment === 'Medizintechnik') {
      this.classes = this.medizintechnikClass;
    } else if (this.sDepartment === 'Elektronik') {
      this.classes = this.elektronikClass;
    }

    console.log("Hier" + this.classes);
  }

  /*Sending Student to the Server with all the right Data*/
  newStudent(dataString) {
    /*this.httpService.getCandidates().subscribe((res) => this.putCandidates(res));*/
    this.candidate.username = this.studentNew.username;
    this.candidate.firstname = this.studentNew.firstname;
    this.candidate.lastname = this.studentNew.lastname;
    alert(this.studentNew.position);
    console.log(this.candidate);
    this.httpService.createCandidate(this.candidate).subscribe(candidateinfo => this.gettingTime(candidateinfo));
  }

  gettingTime(candidateinfo) {
    alert(candidateinfo);
    this.httpService.getCurrentVoteDate().subscribe(data => this.setrestCandidateInfo(data));
  }

  setrestCandidateInfo(data) {
    this.date = data;
    console.log('election date: ' + this.date);

    this.candidateplus.username = this.studentNew.username;
    this.candidateplus.planneddate = this.date;
    this.candidateplus.electionType = this.cposition;
    this.candidateplus.schoolClassName = this.studentNew.candidateClass;
    this.candidateplus.file = null;
    this.candidateplus.electionPromis = this.studentNew.electionPromise;

    this.httpService.createCandidature(this.candidateplus).subscribe(data2 => alert(data2));
  }

  checkForm() {
    if (this.firstName === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.lastName === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sDepartment === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sClass === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sMatrikelNr === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sWahlversprechen === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.cposition === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else {
      this.newStudent(this.studentNew);
    }
  }

  updateCandidates(){
    if (this.firstName === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.lastName === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sDepartment === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sClass === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sMatrikelNr === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.sWahlversprechen === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else if (this.cposition === '') {
      alert('Nicht alle Felder ausgefüllt!');
    } else {

      this.updateCandidate.firstname = this.firstName;
      this.updateCandidate.lastname = this.lastName;
      this.updateCandidate.position = this.cposition;
      this.updateCandidate.candidateClass = this.sClass;
      this.updateCandidate.department = this.sDepartment;
      this.updateCandidate.electionPromise = this.sWahlversprechen;
      this.updateCandidate.username = this.sMatrikelNr;

      console.log(this.updateCandidate);

      this.httpService.updateCandidate(this.updateCandidate);
    }
  }

  deleteCandidates(){
    if(this.sMatrikelNr !== '' && this.sMatrikelNr !== undefined && this.sMatrikelNr !== null){
      this.httpService.deleteCandidate(this.sMatrikelNr).subscribe(res => console.log(res));
    }
  }

  neuErstellen() {
    this.firstName = '';
    this.lastName = '';
    this.sDepartment = '';
    this.sClass = '';
    this.sMatrikelNr = '';
    this.sWahlversprechen = '';
    this.sImage = '';
    this.cposition = '';
  }
}
