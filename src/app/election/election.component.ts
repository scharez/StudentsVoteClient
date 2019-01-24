import {Component, OnInit} from '@angular/core';
import {Kandidat} from '../Kandidat';
import {forEachComment} from 'tslint';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  kandidats: Kandidat[] = [];
  tests: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann', 'Florentina Gruber', 'Melanie Leitner', 'Ernst Lutzky'];
  tests2: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann'];
  buttonValue: number[][] = [[], [], []];
  arrayValue: boolean[][] = [[], [], []];
  seletedValueOfRow: number[] = new Array<number>(30);
  constructor() {
  }

  ngOnInit() {
  }


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
}
