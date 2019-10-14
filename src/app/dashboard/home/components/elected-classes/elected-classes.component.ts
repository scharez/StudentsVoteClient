import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elected-classes',
  templateUrl: './elected-classes.component.html',
  styleUrls: ['./elected-classes.component.css']
})
export class ElectedClassesComponent implements OnInit {

  classes = new Array<String>();


  constructor() { }

  ngOnInit() {
  }

}
