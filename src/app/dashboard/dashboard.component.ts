import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';


export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.dataService.showToolBar = false;
  }

}
