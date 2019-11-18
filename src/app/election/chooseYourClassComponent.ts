import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClassData} from '../ClassData';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';
import {KandidatenEingang} from '../KandidatenEingang';
import {KlassenEingang} from '../KlassenEingang';

@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClassComponent.html',
})
export class ChooseYourClassComponent implements OnInit {

  classes: KlassenEingang[] = [];
  sClass: string = '';


  /*Wie viele Kandidaten werden ausgelesen und wie ist das aufgebaut*/
  resClasses: string;
  countV: number = 0;

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
    this.httpService.getVotingClasses().subscribe((resClasses) => this.loadClass(resClasses));
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

  loadClass(resClasses: Array<KlassenEingang>) {
    console.log(resClasses);
    resClasses.forEach(item => {
      console.log(item.klassenName);

      this.classes[this.countV] = {'klassenName': item.klassenName};
      this.countV++;
    });
  }


}
