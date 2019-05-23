import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../Student';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {
  /*Formular Daten*/
  firstName = '';
  lastName = '';
  sDepartment = '';
  sClass = '';
  sMatrikelNr = '';
  sWahlversprechen = '';
  sImage = '';

  textTest: String;
  ret: string

  /*Schüler Array*/
  studentNew: Student = new Student();
  dataString: String = '';

  /*Image*/
  @Input() i: number;
  @Input() id: string;

  imagePreviewS: string;
  selectedFileS: File;
  selectedFileA: File;
  imagePreviewA: string;


  httpService: HttpService;


  /*Für Klassenauswahl nach Abteilungen*/
  classes: string[] = new Array<string>(50);
  medientechnikClass: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM', '5BHITM'];
  informatikClass: string[] = ['1AHIF', '1BHIF', '1CHIF', '2AHIF', '2BHIF', '2CHIF', '3AHIF', '3BHIF', '3CHIF', '4AHIF', '4BHIF'];
  elektronikClass: string[] = ['1AHEL', '2AHEL', '3AHEL', '4AHEL', '5AHEL'];
  medizintechnikClass: string[] = ['1AHBG', '2AHBG', '3AHBG', '4AHBG', '5AHBG'];
  options: string[] = ['Elektronik', 'Informatik', 'Medientechnik', 'Medizintechnik'];


  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.dowloadStudents();
  }


  /*Herunterladen von schon eingetragenen Schülern*/
  dowloadStudents() {
    this.httpService.getCandidates().subscribe();
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
    this.studentNew.position = this.id;

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
  }

  /*Sending Student to the Server with all the right Data*/
  newStudent(dataString) {
    /*this.httpService.getCandidates().subscribe((res) => this.putCandidates(res));*/

    this.httpService.setCandidate(dataString).subscribe((this.ret));
    console.log(dataString);
    console.log(this.ret);
    console.log('yeah');
  }

  /*File Upload*/
  // https://stackoverflow.com/questions/47936183/angular-file-upload
  onFileUpload(event) {
    if (this.id === 's') {
      this.selectedFileS = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewS = reader.result.toString();
      };
      reader.readAsDataURL(this.selectedFileS);
    } else {
      this.selectedFileA = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewA = reader.result.toString();
      };
      reader.readAsDataURL(this.selectedFileA);
    }
  }

  OnUploadFile(index) {
    if (this.id === 's') {
      /*this.http.post('http://', this.selectedFileS).subscribe();*/
    } else {
      /*this.http.post('http://', this.selectedFileA).subscribe();*/
    }

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
    } else if (this.sImage === '') {
      alert('Bild hinzufügen!');
    } else {
      this.newStudent(this.studentNew);
    }
  }



}
