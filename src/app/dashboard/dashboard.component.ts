import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  anzahlKandidaten: number[] = [];
  anzahlKandidatenDep: number[] = [];
  count = -1;
  countDep = -1;
  begin = 0;

  classes: Class[] = [
    {value: '2AHITM', viewValue: '2AHITM'},
    {value: '3AHITM', viewValue: '3AHITM'},
    {value: '4AHITM', viewValue: '4AHITM'}
  ];

  myControl = new FormControl();
  options: string[] = ['Elektronik', 'Infomatik', 'Medientechnik', 'Medizintechnik'];


  constructor() {
  }

  ngOnInit() {
  }

  addStudent() {
    this.count = this.count + 1;
    this.anzahlKandidaten[this.count] = 1;
  }

  addStudentDep() {
    this.countDep = this.countDep + 1;
    this.anzahlKandidatenDep[this.countDep] = 1;
  }

  schuelerId(): string {
    this.begin = this.anzahlKandidaten.length;
    this.begin = this.begin + 1;
    return 'schueler' + this.begin;
  }

}

