import { Component, OnInit } from '@angular/core';
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
  tests2: String[] = [];
  buttonValue: number[][] = [[], []];
  arrayValue: boolean[][] = [[] , []];
  constructor() { }

  ngOnInit() {
  }

  getValue(getI: number, val: number){
    this.buttonValue[getI][val] = val;
    for (let i = 0; i < this.tests.length; i++) {
      for (let j = 0; j < 6; j++ ) {
        if (this.buttonValue[getI][j] === this.buttonValue[i][j] && this.buttonValue[getI] !== this.buttonValue[getI]) {
          this.arrayValue[getI][val] = true;
        } else {
        }
      }
    }
  }

}
