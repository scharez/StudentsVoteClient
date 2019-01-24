import { Component, OnInit } from '@angular/core';
import {Kandidat} from '../Kandidat';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  tests: String[] = ['Martin Mayr', 'Markus Berger', 'Max Mustermann', 'Florentina Gruber', 'Melanie Leitner', 'Ernst Lutzky'];
  arrayValue: boolean[][] = [[] , []];
  showSpinner: any;
  constructor() { }

  ngOnInit() {
  }

  check() {

  }

}
