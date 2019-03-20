import {Component, OnInit} from '@angular/core';
import {Punkte} from '../Punkte';
import {forEachComment} from 'tslint';
import {Student} from '../Student';
import {PunkteEingang} from '../PunkteEingang';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  /* HttpService*/
  httpService: HttpService;

  /*Array der Kandidaten für den Schulsprecher*/
  tests: PunkteEingang[] = [{'vname': 'Martin', 'nname': 'Mayr', 'id': 'it150189'},
    {'vname': 'Markus', 'nname': 'Berger', 'id': 'if130169'},
    {'vname': 'Max', 'nname': 'Mustermann', 'id': 'it150145'},
    {'vname': 'Florentina', 'nname': 'Gruber', 'id': 'it160197'},
    {'vname': 'Melanie', 'nname': 'Leitner', 'id': 'it140159'},
    {'vname': 'Ernst', 'nname': 'Lutzky', 'id': 'it170137'}];

  /*Array der Kandidaten für den Abteilungssprecher*/
  tests2: PunkteEingang[] = [{'vname': 'Martin', 'nname': 'Mayr', 'id': 'it150189'},
    {'vname': 'Markus', 'nname': 'Berger', 'id': 'if130169'},
    {'vname': 'Melanie', 'nname': 'Leitner', 'id': 'it140159'},
    {'vname': 'Ernst', 'nname': 'Lutzky', 'id': 'it170137'}];


  /*Zum Vergleichen der Radio-Buttons*/
  seletedValueOfRow: number[] = new Array<number>(30);
  seletedValueOfRowAb: number[] = new Array<number>(30);

  /*Array für die Punkteanzahl vom Schulsprecher*/
  punkte: Punkte[] = [];
  punkte2: Punkte[] = [];

  /*Json*/
  punkteString;
  punkteString2;


  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    for (let i = 0; i < this.tests.length; i++) {

      this.punkte.push({'id': this.tests[i].id, 'score': 0});
      console.log(this.punkte[i]);
    }
    for (let i = 0; i < this.tests2.length; i++) {
      this.punkte2.push({'id': this.tests2[i].id, 'score': 0});
    }
    console.log(this.punkte, this.punkte2);
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


    /*if (this.punkte.length === 0) {
      this.punkte.push(new Punkte(this.tests[getI].matrikelnummer, val));
    } else {
      for (let j = 0; j < this.punkte.length; j++) {
        if (this.tests[getI].matrikelnummer === this.punkte[j].matrikelnummer) {
          this.punkte[j].punkte = val;
        }else if (this.tests[getI].matrikelnummer === this.punkte[j].matrikelnummer) {

        } else {
          this.punkte.push(new Punkte(this.tests[getI].matrikelnummer, val));
        }
      }
    } */

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
    /*Daten an Server schicken    daten -> this.punkte[j]*/
    /*this.punkte.splice(0, 1);
    this.punkte2.splice(0, 1);*/

    this.punkteString = JSON.stringify(this.punkte);
    this.punkteString2 = JSON.stringify(this.punkte2);

    this.httpService.sendPoints(this.punkteString).subscribe();
    this.httpService.sendPoints(this.punkteString2).subscribe();

    console.log(this.punkteString, this.punkte2);

    for (let i = 0; i < this.punkte.length; i++) {
      this.punkte[i].score = 0;
    }

    /*location.reload();*/

  }
}
