import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-new-election',
  templateUrl: './new-election.component.html',
  styleUrls: ['./new-election.component.css']
})
export class NewElectionComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  newElection() {
    this.httpService.newElection();
  }

  runOff() {
    this.httpService.runOff();
  }
}
