import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Kandidat} from '../../Kandidat';
import {Student} from '../../Student';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

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
  anzahlKandidatenBild: string[] = [];
  anzahlKandidaten: number[] = [];
  anzahlKandidatenDep: number[] = [];
  count = -1;
  countDep = -1;
  selectedFile: File[] = [];
  imagePreview: string;

  constructor(private http: HttpClient) {
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

  sendStudent() {
    /*let newPerson = Object.assign({}, this.activeCandidate);
    this.persons.push(newPerson);*/
  }


  onFileUpload(event, index) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
      this.anzahlKandidatenBild[index] = this.imagePreview;
    };
    reader.readAsDataURL(this.selectedFile[index]);
  }

  /*
  OnUploadFile(index) {
    this.http.post('http://', this.selectedFile[index]).subscribe();
  }
  '/
*/

}
