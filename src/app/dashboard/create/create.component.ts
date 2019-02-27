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
  begin = 0;
  activeCandidate: Kandidat = new Kandidat();
  /*Student ngModel*/
  firstName: String = '';
  lastName: String = '';
  sDepartment: String = '';
  sClass: String = '';
  sWahlversprechen = '';
  sImage = '';
  studentNew: Student = new Student();
  studentsTest: Student[] = [];
  /*Für Klassenauswahl nach Abteilungen*/
  classes: String[] = new Array<String>(50);
  medientechnikClass: String[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM', '5BHITM'];
  informatikClass: String[] = ['1AHIF', '1BHIF', '1CHIF', '2AHIF', '2BHIF', '2CHIF', '3AHIF', '3BHIF', '3CHIF', '4AHIF', '4BHIF'];
  elektronikClass: String[] = ['1AHEL', '2AHEL', '3AHEL', '4AHEL', '5AHEL'];
  medizintechnikClass: String[] = ['1AHBG', '2AHBG', '3AHBG', '4AHBG', '5AHBG'];
  myControl = new FormControl();
  options: string[] = ['Elektronik', 'Informatik', 'Medientechnik', 'Medizintechnik'];
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


  addStudentValues() {
    this.studentNew.firstName = this.firstName;
    this.studentNew.lastName = this.lastName;
    this.studentNew.sClass = this.sClass;
    this.studentNew.sDeparture = this.sDepartment;
    this.studentNew.sWahlversprechen = this.sWahlversprechen;
    this.studentNew.sImage = this.sImage;
  }

  /*Abteilung*/
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


  }


}
