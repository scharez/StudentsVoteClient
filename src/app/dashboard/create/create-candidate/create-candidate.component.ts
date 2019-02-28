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
  sWahlversprechen = '';
  sImage = '';

  /*Schüler Array*/
  studentNew: Student = new Student();

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
    this.studentNew.sDeparture = this.sDepartment;
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

}
