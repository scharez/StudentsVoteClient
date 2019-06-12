import {Injectable, OnInit} from '@angular/core';
import {KandidatenEingang} from '../KandidatenEingang';
import {Kandidaten} from '../Kandidaten';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public showToolBar = true;
  public showDialog = true;
  public candidatesS: Kandidaten[] = [];
  public candidatesA: Kandidaten[] = [];
}
