import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../../services/http.service';
import {Punkte} from '../../../../Punkte';

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
  inputString2 = '[{"Max": 10000, "Hannes": 200, "Rita": 400, "Karla": 6000}]';

  Punkte; punkte = new Punkte();

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit(): void {

    // this.openHttpService();
    alert('Hi');

    this.parseData(this.inputString2);

  }

  openHttpService() {
    this.httpService.getCVs().subscribe((res) => this.parseData(res));
  }

  parseData(res) {

    this.punkte = JSON.parse(res);
    const resultArray = Object.keys(Punkte).map(function(objecttoarray) {
      const punkte = Punkte[objecttoarray];
      // do something with person
      return punkte;
    });
    alert(resultArray);

  }

}
