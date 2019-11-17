import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../../services/http.service';

@Component({
  selector: 'app-elect-setting',
  templateUrl: './elect-settings.component.html',
  styleUrls: ['./elect-settings.component.css']
})
export class ElectSettingsComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  fileToUpload: File = null;

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.httpService.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
    });
  }

  beginElection(): void {

    alert('Begin Election');
    console.log('LOL');

    this.httpService.beginElection();

  }

  endElection(): void {

    alert('End Election');

    this.httpService.endElection();
  }

  endElection4Teacher(): void {

    alert('End Election4Teacher');

    this.httpService.endElection4Teacher();
  }
}

