import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../ClassData';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClass.html',
})
export class ChooseYourClassComponent implements OnInit {

  classes: string[] = ['1AHITM', '1BHITM', '2AHITM', '2BHITM', '3AHITM', '3BHITM', '4AHTIM', '4BHITM', '5AHITM'];
  sClass: string = '';

  constructor(
    public dialogRef: MatDialogRef<ChooseYourClassComponent>,
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
    this.router.navigate(['login']);

  }


  onClick() {
    if (this.sClass === '') {
      location.reload();
      // localStorage.setItem('showDialog', 'true');
    } else {
      this.dialogRef.close();
      this.httpService.instanceCVs(this.sClass).subscribe((resClass) => this.ausgabe(resClass));
      // localStorage.setItem('showDialog', 'false');
    }
  }

  ausgabe(resClass: string) {
    console.log(resClass);
  }

}
