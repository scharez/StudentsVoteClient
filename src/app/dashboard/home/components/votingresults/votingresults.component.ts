import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../../services/http.service';
import {Punkte} from '../../../../Punkte';
import {VotingResultPunkte} from '../../../../VotingResultPunkte';

import {formatDate} from '@angular/common';
import {AppStorage} from '../../../../objects/app.storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-votingresults',
  templateUrl: './votingresults.component.html',
  styleUrls: ['./votingresults.component.css']
})
export class VotingresultsComponent implements OnInit {

  private httpService: HttpService;
  private router: Router;

  myType = 'PieChart';

  myColumnNames1 = ['Schulsprecher', 'Punkte'];
  title1 = 'Schulsprecher';

  myColumnNames4 = ['Klassen', 'Punkte'];
  title4 = 'Klassen';

  myColumnNames2 = ['Abteilungssprecher Elektronik', 'Punkte'];
  title2 = 'Abteilungssprecher Elektronik';

  myColumnNames3 = ['Abteilungssprecher Informatik', 'Punkte'];
  title3 = 'Abteilungssprecher Informatik';

  inputString2 = '[{"Max": 10000}, {"Hannes": 200}, {"Rita": 400}, {"Karla": 6000}]';
  schulSprecher = '[{"user": "Max", "score": 10000}, {"user": "Basti", "score": 500}, {"user": "Stefan", "score": 123}, {"user": "Günther", "score": 847}]';
  abtSprecherE = '[{"user": "Max", "score": 100}, {"user": "Basti", "score": 500}, {"user": "Stefan", "score": 650}, {"user": "Günther", "score": 50}]';
  abtSprecherI = '[{"user": "Max", "score": 40}, {"user": "Basti", "score": 10}, {"user": "Stefan", "score": 1000}, {"user": "Günther", "score": 900}]';
  klassen = '[{"klasse": "nicht gewählt", "score": 36}, {"klasse": "5ahitm", "score": 1}, {"klasse": "3ahitm", "score": 1}]';


  //  JSON als welches wir die Anfrage an den Server schicken
  meinDatum = '';
  myRequest: VotingResultPunkte = new VotingResultPunkte();

  punkte1: Array<any> = [['', 0]];
  punkte2: Array<any> = [['', 0]];
  punkte3: Array<any> = [['', 0]];
  punkte4: Array<any> = [['', 0]];


  constructor(httpService: HttpService, router: Router) {
    this.httpService = httpService;
    this.router = router;

    this.meinDatum = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    console.log(this.meinDatum);
  }

  ngOnInit(): void {
    this.makeDataToGraph(this.inputString2);
    this.openHttpService();
  }

  openHttpService() {
    this.myRequest.date = this.meinDatum;
    console.log(this.myRequest);

    this.httpService.getSchoolClassResults(this.myRequest).subscribe((res) => this.makeDataToGraph(res));
  }

  parseData(res): void {
    localStorage.setItem('logged', 'true');
    localStorage.setItem('user', JSON.stringify(res));

    const storage: AppStorage = JSON.parse(localStorage.getItem('user'));

    switch (storage.role) {

      case 'Students':
        this.router.navigate(['info']);
        break;

      case 'Teacher':
        this.router.navigate(['election']);
        break;

      case 'Candidates':
        this.router.navigate(['info']);
        break;

      case 'ADMIN':
        this.router.navigate(['dashboard']);
        break;
    }
  }

  makeDataToGraph(res) {
    const parsed1 = JSON.parse(this.schulSprecher);

    for (const p of parsed1) {
      console.table(p.user, p.score);
      this.punkte1.push([p.user, p.score]);
      console.log(JSON.stringify(this.punkte1));
    }

    const parsed2 = JSON.parse(this.abtSprecherE);

    for (const p of parsed2) {
      console.table(p.user, p.score);
      this.punkte2.push([p.user, p.score]);
      console.log(JSON.stringify(this.punkte2));
    }

    const parsed3 = JSON.parse(this.abtSprecherI);

    for (const p of parsed3) {
      console.table(p.user, p.score);
      this.punkte3.push([p.user, p.score]);
      console.log(JSON.stringify(this.punkte3));
    }

    const parsed4 = JSON.parse(this.klassen);

    for (const p of parsed4) {
      console.table(p.klasse, p.score);
      this.punkte4.push([p.klasse, p.score]);
      console.log(JSON.stringify(this.punkte4));
    }
  }
}

