import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Kandidat} from '../Kandidat';

export interface Class {
  value: string;
  viewValue: string;
}

// @ts-ignore
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }



}
