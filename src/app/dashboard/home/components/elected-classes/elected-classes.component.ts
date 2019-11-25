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

  classes =  [];    //new Array<String>();

  /* Pop-Up Window*/
  dialog: MatDialog;
  myClass: string;

  constructor(dialog: MatDialog, private httpService: HttpService) {
    this.dialog = dialog;
  }

  ngOnInit() {
    this.httpService.getFinishedClasses().subscribe((classesjson) => this.further(classesjson));
  }

  further(classesjson) {
    for (let i = 0; i < classesjson.length; i++) {
        this.classes.push(classesjson[i].name)
    }

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
