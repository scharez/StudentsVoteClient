import {Component, OnInit} from '@angular/core';
import {Punkte} from '../Punkte';
import {forEachComment} from 'tslint';
import {Student} from '../Student';
import {KandidatenEingang} from '../KandidatenEingang';
import {HttpService} from '../services/http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ChooseYourClassComponent} from './chooseYourClassComponent';
import {FinishedComponent} from './finishedComponent';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  /* HttpService*/
  httpService: HttpService;

  /* Pop-Up Window*/
  dialog: MatDialog;
  myClass: string;

  /*Array der Kandidaten für den Schulsprecher*/
  candidatesS: KandidatenEingang[] = [];

  /*Array der Kandidaten für den Abteilungssprecher*/
  candidatesA: KandidatenEingang[] = [];


  /*Zum Vergleichen der Radio-Buttons*/
  seletedValueOfRow: number[] = new Array<number>(30);
  seletedValueOfRowAb: number[] = new Array<number>(30);

  /*Array für die Punkteanzahl vom Schulsprecher*/
  punkte: Punkte[] = [];
  punkte2: Punkte[] = [];

  /*Json*/
  punkteString;
  punkteString2;

  res: string;
  countS: number = 0;
  countA: number = 0;

  /*Kartenhöhe*/
  länge = this.candidatesS.length + this.candidatesA.length;
  height: string = this.länge * 7.6 + 'em';
  farbe = 'green';


  constructor(httpService: HttpService, dialog: MatDialog, private dataService: DataService) {
    this.httpService = httpService;
    this.dialog = dialog;
    /*this.httpService.getCandidates().subscribe((res) => this.putCandidates(res));*/
    this.res = '[{\"id\":1,\"username\":\"s1\",\"firstname\":\"1\",\"lastname\":\"1\",\"candidateClass\":\"1\",\"department\":\"1\",\"picture\":null,\"electionPromise\":\"1\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":3,\"username\":\"s2\",\"firstname\":\"2\",\"lastname\":\"2\",\"candidateClass\":\"2\",\"department\":\"2\",\"picture\":null,\"electionPromise\":\"2\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":5,\"username\":\"s3\",\"firstname\":\"3\",\"lastname\":\"3\",\"candidateClass\":\"3\",\"department\":\"3\",\"picture\":null,\"electionPromise\":\"3\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":7,\"username\":\"s4\",\"firstname\":\"4\",\"lastname\":\"4\",\"candidateClass\":\"4\",\"department\":\"4\",\"picture\":null,\"electionPromise\":\"4\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":9,\"username\":\"s5\",\"firstname\":\"5\",\"lastname\":\"5\",\"candidateClass\":\"5\",\"department\":\"5\",\"picture\":null,\"electionPromise\":\"5\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":11,\"username\":\"s6\",\"firstname\":\"6\",\"lastname\":\"6\",\"candidateClass\":\"6\",\"department\":\"6\",\"picture\":null,\"electionPromise\":\"6\",\"position\":\"s\",\"candicateVotes\":[]},{\"id\":13,\"username\":\"a1\",\"firstname\":\"1\",\"lastname\":\"1\",\"candidateClass\":\"1\",\"department\":\"1\",\"picture\":null,\"electionPromise\":\"1\",\"position\":\"a\",\"candicateVotes\":[]},{\"id\":15,\"username\":\"a2\",\"firstname\":\"2\",\"lastname\":\"2\",\"candidateClass\":\"2\",\"department\":\"2\",\"picture\":null,\"electionPromise\":\"2\",\"position\":\"a\",\"candicateVotes\":[]},{\"id\":17,\"username\":\"a3\",\"firstname\":\"3\",\"lastname\":\"3\",\"candidateClass\":\"3\",\"department\":\"3\",\"picture\":null,\"electionPromise\":\"3\",\"position\":\"a\",\"candicateVotes\":[]},{\"id\":19,\"username\":\"a4\",\"firstname\":\"4\",\"lastname\":\"4\",\"candidateClass\":\"4\",\"department\":\"4\",\"picture\":null,\"electionPromise\":\"4\",\"position\":\"a\",\"candicateVotes\":[]}]';
    this.putCandidates(this.res);
  }


  ngOnInit() {

    this.onChooseClass();

    for (let i = 0; i < this.candidatesS.length; i++) {
      this.punkte.push({'id': this.candidatesS[i].id, 'score': 0});
      console.log(this.punkte[i]);
    }
    for (let i = 0; i < this.candidatesA.length; i++) {
      this.punkte2.push({'id': this.candidatesA[i].id, 'score': 0});
    }
    console.log(this.punkte, this.punkte2, this.height);
  }


  // Kandidaten herunterladen
  putCandidates(res: string) {

    JSON.parse(res).forEach(item => {
      console.log(item.firstname);
      if (item.position === 's') {

        this.candidatesS[this.countS] = {'vname': item.firstname, 'nname': item.lastname, 'id': item.username};
        this.countS++;

      } else {

        this.candidatesA[this.countA] = {'vname': item.firstname, 'nname': item.lastname, 'id': item.username};
        this.countA++;

      }
    });
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
    for (let i = 0; i < this.punkte.length; i++) {
      if (this.punkte[i].id === this.punkte[getI].id) {
        for (let j = 0; j < this.punkte.length; j++) {
          if (this.punkte[j].score === val) {
            this.punkte[j].score = 0;
          }
        }
        this.punkte[i].score = val;
      }
    }
    console.log(this.punkte);
  }


  /* ID für Kandidaten für den Schulsprecher*/
  getKa(i: number) {
    return this.seletedValueOfRow[i];
  }

  /* ID für Kandidaten für den Abteilungssprecher*/
  getAb(i: number) {
    return this.seletedValueOfRowAb[i];
  }


  /*Abteilungssprecher nur 1 Radio-Button auswählen*/
  getValueAb(getI: number, val: number) {
    for (let i = 0; i < this.seletedValueOfRowAb.length; i++) {
      if (this.seletedValueOfRowAb[i] === val) {
        this.seletedValueOfRowAb[i] = 0;
      }
    }
    this.seletedValueOfRowAb[getI] = val;


    /*Matrikelnummer und Punkte für den Server ohne doppelte Matrikelnummer holen für den Abteilungssprecher*/
    for (let i = 0; i < this.punkte2.length; i++) {
      if (this.punkte2[i].id === this.punkte2[getI].id) {
        for (let j = 0; j < this.punkte2.length; j++) {
          if (this.punkte2[j].score === val) {
            this.punkte2[j].score = 0;
          }
        }
        this.punkte2[i].score = val;
      }
    }


    console.log(this.punkte2);

  }


  voteAgain() {
    /*for ( var k : number = 0; k < this.punkte.length; k++) {
      alert(this.punkte[k].id + " has " + this.punkte[k].score + " points");
    }*/
    /*Daten an Server schicken    daten -> this.punkte[j]*/
    /*this.punkte.splice(0, 1);
    this.punkte2.splice(0, 1);*/

    // this.punkteString = JSON.stringify();
    // this.punkteString2 = JSON.stringify();

    this.httpService.sendPoints(this.punkte).subscribe();
    this.httpService.sendPoints(this.punkte2).subscribe();

    console.log(this.punkteString, this.punkte2);

    for (let i = 0; i < this.punkte.length; i++) {
      this.punkte[i].score = 0;
    }

    this.resetData();

  }

  // Pop-Up after pushing the finished Button
  voteFinished() {
    const dialogRef = this.dialog.open(FinishedComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  instanceMEDT() {
    this.httpService.instanceCVs('4AHITM').subscribe();
  }

  perstistCVs() {
    this.httpService.persistCVs().subscribe();
  }

  endElection() {
    this.httpService.endElection().subscribe();
  }

  // reseting the Radio Button Data
  resetData() {
    for (let i = 0; i < this.punkte.length; i++) {
      this.punkte[i].score = 0;
      this.seletedValueOfRow[i] = 0;
    }
  }
}

/*@Component({
  selector: 'app-election',
  templateUrl: 'chooseYourClassComponent.html',
})
export class ChooseYourClassComponent {

  constructor(
    public dialogRef: MatDialogRef<ChooseYourClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
