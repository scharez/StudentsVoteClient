import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../ClassData';

@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClass.html',
})
export class ChooseYourClassComponent {

  constructor(
    public dialogRef: MatDialogRef<ChooseYourClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
