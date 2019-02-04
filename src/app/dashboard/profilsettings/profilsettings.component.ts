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
  confNewPassword: string;

  changeUsr: boolean = false;
  changePwd: boolean = false;

  pwdVisibility: string[] = ["password", "password", "password", "visibility", "visibility", "visibility"];

  changeUsername() {
    this.newUsername = "";
    if(!this.changeUsr) {
      this.changeUsr = true;
    } else {
      this.changeUsr = false;
    }
  }

  changePassword() {
    this.newPassword = "";
    this.confNewPassword = "";
    if(!this.changePwd) {
      this.changePwd = true;
    } else {
      this.changePwd = false;
    }
  }

  mouseDown(temp: number) {
    this.pwdVisibility[temp] = "text";
    this.pwdVisibility[temp + 3] = "visibility_off"
  }

  mouseUp(temp: number) {
    this.pwdVisibility[temp] = "password";
    this.pwdVisibility[temp + 3] = "visibility"
  }

  saveChanges() {
    if(this.newUsername != null && this.newUsername != "") {
      this.username = this.newUsername;
    }
    if(this.newPassword != null && this.newPassword != "" && this.newPassword == this.confNewPassword) {
      this.password = this.newPassword;
    }
    this.changeUsr = false;
    this.changePwd = false;
    this.newUsername = "";
    this.newPassword = "";
  }

  constructor() {}

  ngOnInit() {
  }

}
