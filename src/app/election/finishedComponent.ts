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
  }


}
