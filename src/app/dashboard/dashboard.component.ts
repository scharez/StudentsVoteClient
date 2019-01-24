import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


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



  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  goToCreate() {
    this.router.navigate(['dashboard/create']);
  }

  goToElect() {
    this.router.navigate(['dashboard/elect']);
  }

  goToProfil() {
    this.router.navigate(['dashboard/profilsettings']);
  }


}
