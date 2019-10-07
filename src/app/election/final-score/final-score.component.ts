import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {KandidatenEingang} from '../../KandidatenEingang';
import {Kandidaten} from '../../Kandidaten';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent implements OnInit {

  candidatesS: Kandidaten[];
  candidatesA: Kandidaten[];

  currentclass = "4AHITM";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.candidatesS = this.dataService.candidatesS;
    this.candidatesA = this.dataService.candidatesA;
  }



}
