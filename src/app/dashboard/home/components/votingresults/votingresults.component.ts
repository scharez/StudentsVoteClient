import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'Chart.js';
import { HttpService } from '../../../../services/http.service';
import {LinkedList} from 'ngx-bootstrap';
import {Candidate} from '../../../../Candidate';

@Component({
  selector: 'app-votingresults',
  templateUrl: './votingresults.component.html',
  styleUrls: ['./votingresults.component.css']
})
export class VotingresultsComponent implements OnInit {

  @ViewChild('chart')   chartLineElementRef: ElementRef;

  private httpService: HttpService;

  PieChart =  [];
  wunderPunkt: Candidate = new Candidate();
  wunderPunkte = new LinkedList();


  context_ratio = null;
  // tslint:disable-next-line:max-line-length
  someinput = '[{"1":6,"2":1,"3":1,"4":1,"5":0,"6":0}, {"1":1,"2":0,"3":0,"4":0,"5":0,"6":0}, {"1":2,"2":1,"3":0,"4":0}, {"1":1,"2":0,"3":0,"4":0}, {"4AHTIM":0}]';
    i = 0;
  somevar;
  somevar2;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.context_ratio = this.chartLineElementRef.nativeElement;
    this.parseData2();
    // this.openHttpService();
  }

  openHttpService() {
    this.httpService.getCVs().subscribe((res) => this.parseData(res));
  }

  parseData(res) {
    alert(res);
  }
  parseData2() {
    this.somevar = JSON.parse(this.someinput);
    console.log(this.somevar);
    console.log(this.somevar[0]);
    Object.assign(this.wunderPunkt, this.somevar[0]);

    this.wunderPunkte.add(this.wunderPunkt);
    /* for (const value in this.somevar) {
      this.somevar2 = JSON.stringify(value);
      console.log(this.somevar2);
    }

     */
  }

  drawRatioChart() {
    this.PieChart = new Chart(this.context_ratio , {
      type: 'bar',
      data: {
        labels: ['car', 'airplane', 'heating'],
        datasets: [{
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(67, 181, 129, 1)',
            'rgba(70, 79, 75, 1)',
            'rgba(85, 229, 167, 1)'
          ],
        }]
      },
      options: {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.

        responsive: true,

        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

        maintainAspectRatio: false,
      }
    });

  }

}
