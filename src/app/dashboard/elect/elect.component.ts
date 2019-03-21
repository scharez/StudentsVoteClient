import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-elect',
  templateUrl: './elect.component.html',
  styleUrls: ['./elect.component.css']
})

export class ElectComponent implements OnInit {
  clicked: boolean = true;

  ngOnInit() {
  }

  wahlBestimmen() {
    if (this.clicked) {
      this.clicked = false;
    } else {
      this.clicked = true;
    }
  }


}
