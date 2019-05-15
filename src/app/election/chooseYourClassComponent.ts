import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../ClassData';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClass.html',
})
export class ChooseYourClassComponent implements OnInit {

  classes: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM'];
  sClass: String = '';


  constructor(
    public dialogRef: MatDialogRef<ChooseYourClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData,
    private router: Router,
    private dataService: DataService
  ) {

    this.dialogRef.disableClose = true;

  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['login']);

  }


  onClick() {
      if (this.sClass === '') {
        location.reload();
        localStorage.setItem('showDialog', 'true');
      } else {
        this.dialogRef.close();
        localStorage.setItem('showDialog', 'false');
      }
  }



}
