import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
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

  selectedFilesS: File[] = [null];
  imagePreviewsS: string[] = [""];

  selectedFilesA: File[] = [null];
  imagePreviewsA: string[] = [""];

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


  onFileUpload(event, index, id){
    if(id == 's') {
      this.selectedFilesS.push(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewsS.push(reader.result.toString());
      };
      reader.readAsDataURL(this.selectedFilesS[index + 1]);
    } else {
      this.selectedFilesA.push(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewsA.push(reader.result.toString());
      };
      reader.readAsDataURL(this.selectedFilesA[index + 1]);
    }
  }

  OnUploadFile(index: number, id) {
    if(id == 's') {
      /*this.http.post('http://', this.selectedFilesS[index + 1]).subscribe();*/
    } else {
      /*this.http.post('http://', this.selectedFilesA[index + 1]).subscribe();*/
    }

  }

}
