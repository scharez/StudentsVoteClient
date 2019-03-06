import {Component, OnInit} from '@angular/core';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  /*Array der Kandidaten*/
  tests: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann', 'Florentina Gruber', 'Melanie Leitner', 'Ernst Lutzky'];
  tests2: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann'];

  /*Zum Vergleichen der Radio-Buttons*/
  seletedValueOfRow: number[] = new Array<number>(30);
  seletedValueOfRowAb: number[] = new Array<number>(30);

  constructor() {
  }

  ngOnInit() {
  }

  //Schulsprecher nur 1 Radio-Button auswählen
  getValue(getI: number, val: number) {
    for (let i = 0; i < this.seletedValueOfRow.length; i++) {
      if (this.seletedValueOfRow[i] === val) {
        this.seletedValueOfRow[i] = 0;
      }
    }
    this.seletedValueOfRow[getI] = val;
  }

  getKa(i: number) {
    return this.seletedValueOfRow[i];
  }


  //Abteilungssprecher nur 1 Radio-Button auswählen
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
