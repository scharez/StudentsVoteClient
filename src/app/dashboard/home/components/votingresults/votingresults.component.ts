import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../../services/http.service';
import {Punkte} from '../../../../Punkte';
import {VotingResultPunkte} from '../../../../VotingResultPunkte';

import {formatDate} from '@angular/common';

@Component({
  selector: 'app-votingresults',
  templateUrl: './votingresults.component.html',
  styleUrls: ['./votingresults.component.css']
})
export class VotingresultsComponent implements OnInit {

  private httpService: HttpService;

  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];
  myColumnNames = ['Schulsprecher', 'Punkte'];
  title = 'Schulsprecher';
  myData1 = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];

  myColumnNames1 = ['Abteilungssprecher Elektronik', 'Punkte'];
  title1 = 'Abteilungssprecher Elektronik';
  myData2 = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];

  myColumnNames2 = ['Abteilungssprecher Informatik', 'Punkte'];
  title2 = 'Abteilungssprecher Informatik';
  myType = 'PieChart';

  inputString2 = '[{"Max": 10000}, {"Hannes": 200}, {"Rita": 400}, {"Karla": 6000}]';
  schulSprecher = '[{"user": "Max", "score": 10000}, {"user": "Basti", "score": 500}, {"user": "Stefan", "score": 123}, {"user": "Günther", "score": 847}]';
  abtSprecherE = '[{"user": "Max", "score": 100}, {"user": "Basti", "score": 500}, {"user": "Stefan", "score": 650}, {"user": "Günther", "score": 50}]';
  abtSprecherI = '[{"user": "Max", "score": 40}, {"user": "Basti", "score": 10}, {"user": "Stefan", "score": 1000}, {"user": "Günther", "score": 900}]';

  //JSON als welches wir die Anfrage an den Server schicken
  myDate = new Date();
  meinDatum = '';
  myRequest: VotingResultPunkte = new VotingResultPunkte();


  lol: Map<any, Punkte> = new Map<any, Punkte>();

  punkte: Array<any> = [['', 0]];
  punkte2: Array<any> = [['', 0]];
  punkte3: Array<any> = [['', 0]];


  constructor(httpService: HttpService) {
    this.httpService = httpService;

    this.meinDatum = formatDate(new Date(), 'DD/MM/YYYY', 'en');
    console.log(this.meinDatum);
  }

  ngOnInit(): void {
    this.parseData(this.inputString2);
  }


  openHttpService() {
    this.myRequest.date = this.meinDatum;
    console.log(this.myRequest);
    this.httpService.getSchoolClassResults(this.myRequest).subscribe((res) => this.parseData(res));
  }

  parseData(res) {

    const parsed = JSON.parse(this.schulSprecher);

    for (const p of parsed) {
      console.table(p.user, p.score);
      this.punkte.push([p.user, p.score]);
    }

    console.log(JSON.stringify(this.punkte));

    const parsed2 = JSON.parse(this.abtSprecherE);

    for (const p of parsed2) {
      console.table(p.user, p.score);
      this.punkte2.push([p.user, p.score]);
    }

    console.log(JSON.stringify(this.punkte2));

    const parsed3 = JSON.parse(this.abtSprecherI);

    for (const p of parsed3) {
      console.table(p.user, p.score);
      this.punkte3.push([p.user, p.score]);

    }
    console.log(JSON.stringify(this.punkte3));
  }

}
