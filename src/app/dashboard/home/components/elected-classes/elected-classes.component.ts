import { Component, OnInit } from '@angular/core';
import {ClassSettings} from './classSettings';
import {MatDialog} from '@angular/material';
import {HttpService} from '../../../../services/http.service';


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

  constructor(dialog: MatDialog, private httpService: HttpService) {
    this.dialog = dialog;
  }

  ngOnInit() {
    this.httpService.getFinishedClasses().subscribe((classesjson) => this.farther(classesjson));
  }

  farther(classesjson) {
    alert(classesjson);
  }

  editClasses(getClass: string) {
    this.choosenClass(getClass);
  }

  choosenClass(getClass: string) {

    const dialogRef = this.dialog.open(ClassSettings, {
      width: '260px',
      data: {name: getClass}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.myClass = result;
    });

  }

}
