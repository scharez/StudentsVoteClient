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

  username: string = "tempUser";
  password: string = "tempPassword";

  newUsername: string;
  newPassword: string;

  changeUsr: boolean = false;
  changePwd: boolean = false;

  passwordType: string = "password";

  changeUsername() {
    this.changeUsr = true;
  }

  changePassword() {
    this.changePwd = true;
  }

   mouseDown() {
     this.passwordType = "text";
  }

  mouseUp() {
    this.passwordType = "password";
  }

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
