import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../../../../ClassData';
import {Router} from '@angular/router';
import {DataService} from '../../../../services/data.service';
import {HttpService} from '../../../../services/http.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-classSettings',
  templateUrl: 'classSettings.html',
})
export class ClassSettings implements OnInit {

  getClass: string = '';
  meinDatum: string  = '';


  constructor(
    public dialogRef: MatDialogRef<ClassSettings>,
    private router: Router,
    private dataService: DataService,
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.dialogRef.disableClose = true;
    console.log(data);
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onClick() {
    this.meinDatum = (formatDate(new Date(), 'dd/MM/yyyy', 'en')).toString();
    console.log(this.meinDatum);
    this.dialogRef.close();
    this.httpService.deleteClass(this.meinDatum).subscribe((resClass) => this.ausgabe(resClass));
    //Scharinger Methode zum abspeichern der klassen die falsch gevoted haben --> 15.11.2019
    this.router.navigate(['election'],{queryParams: {klasse : this.data.name}});

  }

  ausgabe(resClass: string) {
    console.log(resClass);
  }

}
