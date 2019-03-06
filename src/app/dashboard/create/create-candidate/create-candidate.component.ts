import {Component, OnInit} from '@angular/core';
import {Student} from '../../../Student';

@Component({
  selector: 'create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {
  /*Formular Daten*/
  firstName: String = '';
  lastName: String = '';
  sDepartment: String = '';
  sClass: String = '';
  sMatrikelNr = '';
  sWahlversprechen = '';
  sImage = '';

  /*Schüler Array*/
  studentNew: Student = new Student();

  /*Image*/
  imagePreviewsS: string[] = [''];
  selectedFilesS: File[] = [null];
  selectedFilesA: File[] = [null];
  imagePreviewsA: string[] = [''];


  /*Für Klassenauswahl nach Abteilungen*/
  classes: String[] = new Array<String>(50);
  medientechnikClass: String[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM', '5BHITM'];
  informatikClass: String[] = ['1AHIF', '1BHIF', '1CHIF', '2AHIF', '2BHIF', '2CHIF', '3AHIF', '3BHIF', '3CHIF', '4AHIF', '4BHIF'];
  elektronikClass: String[] = ['1AHEL', '2AHEL', '3AHEL', '4AHEL', '5AHEL'];
  medizintechnikClass: String[] = ['1AHBG', '2AHBG', '3AHBG', '4AHBG', '5AHBG'];
  options: string[] = ['Elektronik', 'Informatik', 'Medientechnik', 'Medizintechnik'];

  constructor() {
  }

  ngOnInit() {
  }

  /*Schüler wird mit seinen Daten in Array gespeichert*/
  addStudentValues() {
    this.studentNew.firstName = this.firstName;
    this.studentNew.lastName = this.lastName;
    this.studentNew.sClass = this.sClass;
    this.studentNew.sDepartment = this.sDepartment;
    this.studentNew.sWahlversprechen = this.sWahlversprechen;
    this.studentNew.sImage = this.sImage;
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


  /*File Upload*/
  onFileUpload(event, index, id) {
    if (id == 's') {
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
    if (id == 's') {
      /*this.http.post('http://', this.selectedFilesS[index + 1]).subscribe();*/
    } else {
      /*this.http.post('http://', this.selectedFilesA[index + 1]).subscribe();*/
    }

  }

}
