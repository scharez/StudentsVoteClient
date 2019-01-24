import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilsettings',
  templateUrl: './profilsettings.component.html',
  styleUrls: ['./profilsettings.component.css']
})
export class ProfilsettingsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
