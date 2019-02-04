import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elect',
  templateUrl: './elect.component.html',
  styleUrls: ['./elect.component.css']
})
export class ElectComponent implements OnInit {

  selectedFile: File;
  imagePreview: string;

  constructor(private http: HttpClient) {}

  onFileUpload(event){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result.toString();
    };
    reader.readAsDataURL(this.selectedFile);

    alert(this.selectedFile)
  }

  OnUploadFile() {
    this.http.post('http://', this.selectedFile).subscribe();
  }

  ngOnInit() {
  }

}
