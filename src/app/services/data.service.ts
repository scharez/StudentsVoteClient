import {Injectable, OnInit} from '@angular/core';
import {KandidatenEingang} from '../KandidatenEingang';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public showToolBar = true;
  public showDialog = true;
  public candidatesS: KandidatenEingang[] = [];
  public candidatesA: KandidatenEingang[] = [];
}
