import {Component, OnInit} from '@angular/core';
import {Punkte} from '../Punkte';
import {forEachComment} from 'tslint';
import {Student} from '../Student';
import {PunkteEingang} from '../PunkteEingang';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {


  /*Array der Kandidaten*/
  tests: PunkteEingang[] = [{'vname': 'Martin', 'nname': 'Mayr', 'matrikelnummer': 'it150189'},
    {'vname': 'Markus', 'nname': 'Berger', 'matrikelnummer': 'if130169'},
    {'vname': 'Max', 'nname': 'Mustermann', 'matrikelnummer': 'it150145'},
    {'vname': 'Florentina', 'nname': 'Gruber', 'matrikelnummer': 'it160197'},
    {'vname': 'Melanie', 'nname': 'Leitner', 'matrikelnummer': 'it140159'},
    {'vname': 'Ernst', 'nname': 'Lutzky', 'matrikelnummer': 'it170137'},
    {'vname': 'Ernst', 'nname': 'Lutzky', 'matrikelnummer': 'it170137'}];

  tests2: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann'];


  /*Zum Vergleichen der Radio-Buttons*/
  seletedValueOfRow: number[] = new Array<number>(30);
  seletedValueOfRowAb: number[] = new Array<number>(30);

  /*Array für die Punkteanzahl*/
  punkte: Punkte[] = new Array<Punkte>(20);

  constructor() {
  }

  ngOnInit() {
  }

  /*Schulsprecher nur 1 Radio-Button auswählen*/
  getValue(getI: number, val: number) {
    for (let i = 0; i < this.seletedValueOfRow.length; i++) {
      if (this.seletedValueOfRow[i] === val) {
        this.seletedValueOfRow[i] = 0;
      }
    }
    this.seletedValueOfRow[getI] = val;

    for (let j = 0; j <= this.punkte.length; j++) {
      if (this.tests[getI].matrikelnummer === this.punkte[j].matrikelnummer) {
        this.punkte[j].punkte = val;
      }
    }
    this.punkte.push(new Punkte(this.tests[getI].matrikelnummer));

    console.log(this.tests[getI]);
  }

  getKa(i: number) {
    return this.seletedValueOfRow[i];
  }


  /*Abteilungssprecher nur 1 Radio-Button auswählen*/
  getValueAb(getI: number, val: number) {
    for (let i = 0; i < this.seletedValueOfRowAb.length; i++) {
      if (this.seletedValueOfRowAb[i] === val) {
        this.seletedValueOfRowAb[i] = 0;
      }
    }
    this.seletedValueOfRowAb[getI] = val;
  }


  getAb(i: number) {
    return this.seletedValueOfRowAb[i];
  }
}
