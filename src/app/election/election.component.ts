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

  buttonValue: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  getValue(getI: number): boolean {
    let trueFalse = false;
    for (let i = 0; i < this.tests.length; i++) {
      if (this.buttonValue[getI] === this.buttonValue[i] && this.buttonValue[getI] !== this.buttonValue[getI]) {
        trueFalse = true;
      }

    }
    return trueFalse;
  }

}
