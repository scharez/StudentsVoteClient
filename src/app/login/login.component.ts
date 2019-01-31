import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private httpService: HttpService;
  private router: Router;

  constructor(httpService: HttpService, router: Router) {
    this.httpService = httpService;
    this.router = router;
  }

  username: string;
  password: string;


  login(): void {

    this.httpService.loginCheck(this.username, this.password).subscribe((res) => this.parseLogin(res));


  }

  parseLogin(res): void {


    alert(res);

  }


  ngOnInit() {

  }

}
