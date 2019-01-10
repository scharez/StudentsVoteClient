import { Component, OnInit } from '@angular/core';
import {Kandidat} from '../Kandidat';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  kandidat: Kandidat[] = []

  constructor() { }

  ngOnInit() {
  }

}
