import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elect',
  templateUrl: './elect.component.html',
  styleUrls: ['./elect.component.css']
})
export class ElectComponent implements OnInit {

  anzahlKandidaten: number[] = [1, 2, 3];
  selectedFile: File[] = [];
  imagePreview: string;

  constructor(private http: HttpClient) {}

  onFileUpload(event, index = 0){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(this.selectedFile[index]);
  }

  OnUploadFile(index = 0) {
    this.http.post('http://', this.selectedFile[index]).subscribe();
  }

  ngOnInit() {
  }

}
