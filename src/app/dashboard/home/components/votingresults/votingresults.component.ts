import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'Chart.js';
import { HttpService } from '../../../../services/http.service';
import {LinkedList} from 'ngx-bootstrap';
import {Points} from '../../../../Points';
import {First} from '../../../../First';
import {First_AS} from '../../../../First_AS';
import {Points_AS} from '../../../../Points_AS';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-votingresults',
  templateUrl: './votingresults.component.html',
  styleUrls: ['./votingresults.component.css']
})
export class VotingresultsComponent implements OnInit {

  @ViewChild('chart')   chartLineElementRef: ElementRef;
  @ViewChild('chart1')   chartLineElementRef1: ElementRef;
  @ViewChild('chart2')   chartLineElementRef2: ElementRef;
  @ViewChild('chart3')   chartLineElementRef3: ElementRef;

  p = new Points();
  f = new First();
  pa = new Points_AS();
  fa = new First_AS();
  points = new Array<Points>();
  firsts = new Array<First>();
  pointsa = new Array<Points_AS>();
  firstsa = new Array<First_AS>();
  classes = new Array<String>();

  private httpService: HttpService;

  PieChart;
  PieChart1;
  PieChart2;
  PieChart3;

  context_ratio = null;
  context_ratio1 = null;
  context_ratio2 = null;
  context_ratio3 = null;
  // tslint:disable-next-line:max-line-length
  inputString = '[{"1":6,"2":1,"3":1,"4":1,"5":0,"6":0}, {"1":1,"2":0,"3":0,"4":0,"5":0,"6":0}, {"7":2,"8":1,"9":0,"10":0}, {"7":1,"8":0,"9":0,"10":0}, {"4AHTIM":0,"4BHTIM":0,"3AHTIM":0,"3BHTIM":0}]';
  input;
  studentname;
  position = -2;
  regex = "";
  length = 0;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.context_ratio = this.chartLineElementRef.nativeElement;
    this.context_ratio1 = this.chartLineElementRef1.nativeElement;
    this.context_ratio2 = this.chartLineElementRef2.nativeElement;
    this.context_ratio3 = this.chartLineElementRef3.nativeElement;
    this.drawRatioChart();

    // this.openHttpService();
  }

  openHttpService() {
    this.httpService.getCVs().subscribe((res) => this.parseData(res));
  }

  parseData(res) {
    alert(res);
  }
  parseData2() {
    this.input = JSON.parse(this.inputString);
    console.log(this.input[0]);
    //Object.assign(this.wunderPunkt, this.input[0]);
    for(var j = 0; j < 4;j++){
      while(this.position != -1){
        if(this.position != -2) {

          this.position = JSON.stringify(this.input[j]).search(   this.studentname + '":' + this.regex + ',"');
          //alert('Position: ' + this.position);
          if(this.position != -1){
          this.setstudentname(JSON.stringify(this.input[j]), this.length + 5);
          //alert('Student: ' + this.studentname);
            if(j == 0){
              this.p.name = this.studentname;
            } else if(j == 1) {
              this.f.name = this.studentname;
            } else if(j == 2) {
              this.pa.name = this.studentname;
            } else if(j == 3) {
              this.fa.name = this.studentname;
            }
          this.regex = this.input[j][this.studentname];
          console.log(this.input[j][this.studentname]);
          //alert('Points: ' + this.input[j][this.studentname]);
            if(j == 0) {
              this.p.score = this.input[j][this.studentname];
              this.points.push(this.p);
              this.p = new Points();
            } else if(j == 1) {
              this.f.score = this.input[j][this.studentname];
              this.firsts.push(this.f);
              this.f = new First();
            } else if(j == 2) {
              this.pa.score = this.input[j][this.studentname];
              this.pointsa.push(this.pa);
              this.pa = new Points_AS();
            } else if(j == 3) {
              this.fa.score = this.input[j][this.studentname];
              this.firstsa.push(this.fa);
              this.fa = new First_AS();
            }
          }
        } else {

          this.position = JSON.stringify(this.input[j]).search('"');
          //alert('Position: ' + this.position);
          if(this.position != -1) {
            this.setstudentname(JSON.stringify(this.input[j]), 1);
            //alert('Student: ' + this.studentname);
            if (j == 0) {
              this.p.name = this.studentname;
            } else if (j == 1) {
              this.f.name = this.studentname;
            } else if (j == 2) {
              this.pa.name = this.studentname;
            } else if (j == 3) {
              this.fa.name = this.studentname;
            }
            this.regex = this.input[j][this.studentname];
            console.log(this.input[j][this.studentname]);
            //alert('Points: ' + this.input[j][this.studentname]);
            if (j == 0) {
              this.p.score = this.input[j][this.studentname];
              this.points.push(this.p);
              this.p = new Points();
            } else if (j == 1) {
              this.f.score = this.input[j][this.studentname];
              this.firsts.push(this.f);
              this.f = new First();
            } else if (j == 2) {
              this.pa.score = this.input[j][this.studentname];
              this.pointsa.push(this.pa);
              this.pa = new Points_AS();
            } else if (j == 3) {
              this.fa.score = this.input[j][this.studentname];
              this.firstsa.push(this.fa);
              this.fa = new First_AS();
            }
          }
        }
      }
      this.position = -2;
      this.regex = "";
      this.studentname = "";
    }

    while(this.position != -1){
      if(this.position != -2) {

        this.position = JSON.stringify(this.input[j]).search(   this.studentname + '":0,"');
        //alert('Position: ' + this.position);
        if(this.position != -1){
          this.setstudentname(JSON.stringify(this.input[j]), this.length + 5);
          //alert('Class: ' + this.studentname);
          this.classes.push(this.studentname);
        }
      } else {

        this.position = JSON.stringify(this.input[j]).search('"');
        //alert('Position: ' + this.position);
        if(this.position != -1) {
          this.setstudentname(JSON.stringify(this.input[j]), 1);
          this.classes.push(this.studentname);
          //alert('Class: ' + this.studentname);
        }
      }
    }

    this.showdata();
    this.showclass();
  }

  setstudentname(jsonString, further){
    this.studentname = "";
    var i = further;
    while(jsonString.charAt(this.position + i) != '"'){
      this.studentname = this.studentname + jsonString.charAt(this.position + i);
      i++;
    }
    this.length = this.studentname.length;
  }

  showclass(){

  }

  showdata(){

    this.points.forEach(obj => this.adddatachart(obj, this.PieChart));
    this.PieChart.update();

    this.firsts.forEach(obj => this.adddatachart(obj, this.PieChart1));
    this.PieChart1.update();

    this.pointsa.forEach(obj => this.adddatachart(obj, this.PieChart2));
    this.PieChart2.update();

    this.firstsa.forEach(obj => this.adddatachart(obj, this.PieChart3));
    this.PieChart3.update();

  }

  colors = ['rgba(0, 0, 255, 1)', 'rgba(0, 0, 230, 1)', 'rgba(0, 0, 210, 1)', 'rgba(0, 0, 190, 1)', 'rgba(0, 0, 170, 1)',
    'rgba(0, 0, 150, 1)','rgba(0, 0, 130, 1)' ,'rgba(0, 0, 110, 1)', 'rgba(0, 0, 90, 1)', 'rgba(0, 0, 70, 1)'];
  k = 0;

  adddatachart(obj, chart){
    {
      //alert('Name: ' + obj.name + '  Punkte: ' + obj.score);
      chart.data.labels.push(obj.name);
      //alert(obj.name);
      chart.data.datasets.forEach((dataset) => {
        dataset.data.push(obj.score);
        if(this.k < 10) {
          console.log(this.colors[this.k]);
          dataset.backgroundColor.push(this.colors[this.k]);
          this.k++;
        } else {
          this.k = 0;
        }
      });
    }
  }

  drawRatioChart() {
    this.PieChart = new Chart(this.context_ratio , {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
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
    this.PieChart1 = new Chart(this.context_ratio1 , {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
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
    this.PieChart2 = new Chart(this.context_ratio2 , {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
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
    this.PieChart3 = new Chart(this.context_ratio3 , {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
          ],
        }]
      },
      options: {
        // Boolean - whether or not the chart should be responsive and resize when the browser does.

        responsive: true,

        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container

        maintainAspectRatio: false,
      }
    });;
    this.parseData2();
  }

}
