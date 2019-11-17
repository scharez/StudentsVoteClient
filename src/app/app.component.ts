import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {MatMenu} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private router: Router;


  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
    console.log(this.dataService.showToolBar);
  }

  logout() {
    this.router.navigate(['login']);
  }
}


