import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { User} from '../services/app.user';
import {CustomException} from '../objects/app.customException';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private httpService: HttpService;
  private router: Router;



  constructor(httpService: HttpService, router: Router, private dataService: DataService) {
    this.httpService = httpService;
    this.router = router;
  }


  user: User = new User();

  ce: CustomException = new CustomException();


  login(): void {

    this.httpService.loginCheck(this.user).subscribe((res) => this.parseLogin(res));

  }

  parseLogin(res): void {

    Object.assign(this.ce, res);

    if (this.ce.statusCode === 401) {
      console.log('Auth Fehla');
    } else {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['dashboard']);
    }

  }


  ngOnInit() {

  }

}
