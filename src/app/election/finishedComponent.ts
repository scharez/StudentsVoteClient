import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';
import {ClassData} from '../ClassData';

// @ts-ignore
@Component({
  selector: 'app-finished',
  templateUrl: 'finishedComponent.html'
})
export class FinishedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FinishedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData,
    private router: Router,
    private dataService: DataService,
    private httpService: HttpService
  ) {

    this.dialogRef.disableClose = true;

  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick() {
    this.dialogRef.close();
    this.router.navigate(['login']);
    /*this.print();*/
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write('<html><head><title>Print tab</title></head><body onload="window.print();window.close()">${printContents}></body></html>');
    popupWin.document.close();
  }
}
