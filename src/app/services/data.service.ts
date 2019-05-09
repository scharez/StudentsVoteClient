import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public showToolBar = true;
  public showDialog = true;
}
