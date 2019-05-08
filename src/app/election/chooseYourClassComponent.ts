import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../ClassData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClass.html',
})
export class ChooseYourClassComponent {

  classes: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM'];
  sClass: String = '';

  constructor(
    public dialogRef: MatDialogRef<ChooseYourClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData,
    private router: Router
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['login']);

  }


  onClick() {
    console.log(this.sClass);
    if (this.sClass === '') {
      location.reload();
      console.log("ich war hier");
    } else {
      this.dialogRef.close();
    }
  }

}
