import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Punkte} from '../Punkte';
import {forEachComment} from 'tslint';
import {Student} from '../Student';
import {KandidatenEingang} from '../KandidatenEingang';
import {HttpService} from '../services/http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ChooseYourClassComponent} from './chooseYourClassComponent';
import {FinishedComponent} from './finishedComponent';
import {DataService} from '../services/data.service';
import {Kandidaten} from '../Kandidaten';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit, AfterViewInit {

  private router: Router;
  /* HttpService*/
  httpService: HttpService;

  /* Pop-Up Window*/
  dialog: MatDialog;
  myClass: string;

  /*Array der Kandidaten für den Schulsprecher*/
  candidatesS: Kandidaten[] = [];


  /*Array der Kandidaten für den Abteilungssprecher*/
  candidatesA: Kandidaten[] = [];

  /*Zum Vergleichen der Radio-Buttons*/
  seletedValueOfRow: number[] = new Array<number>(30);
  seletedValueOfRowAb: number[] = new Array<number>(30);

  /*Array für die Punkteanzahl vom Schulsprecher*/
  punkteS: Punkte[] = [];
  punkteA: Punkte[] = [];

  /*Json*/
  punkteString;
  punkteString2;

  /*Wie viele Kandidaten werden ausgelesen und wie ist das aufgebaut*/
  res: string;
  countS: number = 0;
  countA: number = 0;

  /*Kartenhöhe*/
  laenge: number;
  height: string;

  isClass;
  getClass: string;


  constructor(httpService: HttpService, dialog: MatDialog, private dataService: DataService, router: Router, private route: ActivatedRoute) {
    this.router = router;
    this.httpService = httpService;
    this.dialog = dialog;
    this.httpService.getCandidates().subscribe((res) => this.putCandidates(res));
  }


  ngOnInit() {
    this.isClass = this.route.queryParams.subscribe(params => {
      if (params.klasse) {
        this.getClass = params.klasse;
        console.log(this.getClass);
      }

    });

  }


  private pseudoInit() {

    for (let i = 0; i < this.candidatesS.length; i++) {
      this.punkteS.push({'id': this.candidatesS[i].id, 'score': 0});
      console.log(this.punkteS[i]);
    }
    for (let a = 0; a < this.candidatesA.length; a++) {
      this.punkteA.push({'id': this.candidatesA[a].id, 'score': 0});
      console.log(this.punkteA[a]);
    }
    console.log(this.punkteS, this.punkteA, this.height);

  }


  putCandidates(res: Array<KandidatenEingang>) {
    console.log(res);
    res.forEach(item => {
      console.log(item.firstname);
      if (item.position === 's') {
        this.candidatesS[this.countS] = {'vname': item.firstname, 'nname': item.lastname, 'id': item.username};
        this.countS++;
      } else {
        this.candidatesA[this.countA] = {'vname': item.firstname, 'nname': item.lastname, 'id': item.username};
        this.countA++;
      }
    });
    this.pseudoInit();

    /*Kartenhöhe*/
    this.laenge = this.candidatesS.length + this.candidatesA.length;
    this.height = this.laenge * 10.5 + 'em';
  }


  // Pop-Up fenster zur Klassen auswahl
  onChooseClass() {
    // if (localStorage.getItem('showDialog') === 'true') {
    const dialogRef = this.dialog.open(ChooseYourClassComponent, {
      width: '250px',
      data: {name: this.myClass}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.myClass = result;
    });

  }


  /*Schulsprecher nur 1 Radio-Button auswählen*/
  getValue(getI: number, val: number) {
    for (let i = 0; i < this.seletedValueOfRow.length; i++) {
      if (this.seletedValueOfRow[i] === val) {
        this.seletedValueOfRow[i] = 0;
      }
    }
    this.seletedValueOfRow[getI] = val;


    /*Matrikelnummer und Punkte für den Server ohne doppelte Matrikelnummer holen für den Schulsprecher*/
    for (let i = 0; i < this.punkteS.length; i++) {
      if (this.punkteS[i].id === this.punkteS[getI].id) {
        for (let j = 0; j < this.punkteS.length; j++) {
          if (this.punkteS[j].score === val) {
            this.punkteS[j].score = 0;
          }
        }
        this.punkteS[i].score = val;
      }
    }
    console.log(this.punkteS);
  }

  /*Abteilungssprecher nur 1 Radio-Button auswählen*/
  getValueAb(getA: number, val: number) {
    for (let a = 0; a < this.seletedValueOfRowAb.length; a++) {
      if (this.seletedValueOfRowAb[a] === val) {
        this.seletedValueOfRowAb[a] = 0;
      }
    }
    this.seletedValueOfRowAb[getA] = val;


    /*Matrikelnummer und Punkte für den Server ohne doppelte Matrikelnummer holen für den Abteilungssprecher*/
    for (let a = 0; a < this.punkteA.length; a++) {
      if (this.punkteA[a].id === this.punkteA[getA].id) {
        for (let k = 0; k < this.punkteA.length; k++) {
          if (this.punkteA[k].score === val) {
            this.punkteA[k].score = 0;
          }
        }
        this.punkteA[a].score = val;
      }
    }


    console.log(this.punkteA);

  }


  /* ID für Kandidaten für den Schulsprecher*/
  getKa(i: number) {
    return this.seletedValueOfRow[i];
  }

  /* ID für Kandidaten für den Abteilungssprecher*/
  getAb(a: number) {
    return this.seletedValueOfRowAb[a];
  }


  voteAgain() {
    this.httpService.sendPoints(this.punkteS).subscribe();
    this.httpService.sendPoints(this.punkteA).subscribe();


    console.log(this.punkteString, this.punkteA);

    for (let i = 0; i < this.punkteS.length; i++) {
      this.punkteS[i].score = 0;
    }

    for (let a = 0; a < this.punkteA.length; a++) {
      this.punkteA[a].score = 0;
    }

    this.resetData();

  }


  voteFinished() {

    this.voteAgain();

    const dialogRef = this.dialog.open(FinishedComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  instanceMEDT() {
    this.httpService.instanceCVs(this.myClass).subscribe();
  }

  endElection() {
    this.httpService.endElection();
  }

  // reseting the Radio Button Data
  resetData() {
    for (let i = 0; i < this.punkteS.length; i++) {
      this.punkteS[i].score = 0;
      this.seletedValueOfRow[i] = 0;
    }

    for (let a = 0; a < this.punkteA.length; a++) {
      this.punkteA[a].score = 0;
      this.seletedValueOfRow[a] = 0;
    }

  }

  printme() {
    this.router.navigate(['finalScore']);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write('<html><head><title>Print tab</title></head><body onload="window.print();window.close()"> {{ printContents }} ></body></html>');
    popupWin.document.close();
  }

  ngAfterViewInit(): void {
    if (this.getClass == null) {
      setTimeout(() => this.onChooseClass());
    } else {
      this.httpService.instanceCVs(this.getClass).subscribe();
    }
  }
}

