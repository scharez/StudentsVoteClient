import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Student} from '../../Student';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';
import {HttpService} from '../../services/http.service';

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  studentIdent: string;
  studentAbtIdent: string;

  /*Test Array für FileUpLoad*/
  anzahlKandidaten: number[] = [];
  anzahlKandidatenDep: number[] = [];
  count = -1;
  countDep = -1;

  students: Student = new Student();

  httpService: HttpService;


  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.loadStudent();
  }

  loadStudent() {
    this.httpService.getCandidate().subscribe(data => (this.students = data));
  }

  addStudent() {
    this.count = this.count + 1;
    this.anzahlKandidaten[this.count] = 1;
    console.log('schüler hinzuggefügt');
    console.log(this.anzahlKandidaten[this.count].valueOf());
  }

  addStudentDep() {
    this.countDep = this.countDep + 1;
    this.anzahlKandidatenDep[this.countDep] = 1;
  }

  /*jeder Schüler hat eine eigene ID*/
  schuelerId(i): string {
    this.studentIdent = 'schueler' + i;
    log(this.studentIdent);
    return this.studentIdent;
  }

  abteilungId(j): string {
    this.studentAbtIdent = 'schuelerAbt' + j;
    log(this.studentAbtIdent);
    return this.studentAbtIdent;
  }

}
