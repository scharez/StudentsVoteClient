import { Component, OnInit } from '@angular/core';
import {ClassSettings} from './classSettings';
import {MatDialog} from '@angular/material';
import {ChooseYourClassComponent} from '../../../../election/chooseYourClassComponent';


@Component({
  selector: 'app-elected-classes',
  templateUrl: './elected-classes.component.html',
  styleUrls: ['./elected-classes.component.css']
})
export class ElectedClassesComponent implements OnInit {

  classes =  ["4AHITM", "5BHIF", "1AHEL", "3AHIF", "5AHITM", "2AHBG"];    //new Array<String>();

  /* Pop-Up Window*/
  dialog: MatDialog;
  myClass: string;

  constructor(dialog: MatDialog) {
    this.dialog = dialog;
  }

  ngOnInit() {

  }

  editClasses(getClass: string){
    this.onChoosenClass(getClass);
  }

  onChoosenClass(getClass: string) {

    const dialogRef = this.dialog.open(ClassSettings, {
      width: '250px',
      data: {name: getClass}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.myClass = result;
    });

  }

}
