import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elect',
  templateUrl: './elect.component.html',
  styleUrls: ['./elect.component.css']
})

export class ElectComponent implements OnInit {

  //selectedFile: File;
  //imagePreview: string;

  selectedFiles: File[] = [null];
  imagePreviews: string[] = [""];

  constructor(private http: HttpClient) {}

  onFileUpload(event, index: number){
    //this.selectedFile = event.target.files[0];
    this.selectedFiles.push(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      //this.imagePreview = reader.result.toString();
      this.imagePreviews.push(reader.result.toString());
    };
    //reader.readAsDataURL(this.selectedFile);
    reader.readAsDataURL(this.selectedFiles[index + 1]);
  }

  OnUploadFile(index: number) {
    this.http.post('http://', this.selectedFiles[index + 1]).subscribe();
  }

  ngOnInit() {
  }

}
