import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Class {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  classes: Class[] = [
    {value: '2AHITM', viewValue: '2AHITM'},
    {value: '3AHITM', viewValue: '3AHITM'},
    {value: '4AHITM', viewValue: '4AHITM'}
  ];

  myControl = new FormControl();
  options: string[] = ['Elektronik', 'Infomatik', 'Medientechnik', 'Medizintechnik'];


  constructor() { }

  ngOnInit() {
  }



}

