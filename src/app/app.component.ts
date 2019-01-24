import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.showToolBar = true;
    console.log(this.dataService.showToolBar);
  }
}
