import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Kandidat} from '../../Kandidat';

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

  anzahlKandidaten: number[] = [];
  anzahlKandidatenDep: number[] = [];
  count = -1;
  countDep = -1;
  begin = 0;
  activeCandidate: Kandidat = new Kandidat();


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
    console.log('schüler hinzuggefügt');
    console.log(this.anzahlKandidaten[this.count].valueOf());
  }

  addStudentDep() {
    this.countDep = this.countDep + 1;
    this.anzahlKandidatenDep[this.countDep] = 1;
  }

  schuelerId(): string {
    return 'schueler' + this.begin;
  }

  sendStudent() {
    /*let newPerson = Object.assign({}, this.activeCandidate);
    this.persons.push(newPerson);*/
  }


}
