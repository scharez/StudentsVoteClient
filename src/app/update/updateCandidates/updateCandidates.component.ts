import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Kandidaten} from '../../Kandidaten';
import {KandidatenEingang} from '../../KandidatenEingang';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'updateCandidates',
  templateUrl: './updateCandidates.component.html',
  styleUrls: ['./updateCandidates.component.css']
})



export class UpdateCandidatesComponent implements OnInit {
  checkCount = 0;

  //candidates: Kandidaten[] = [];
  candidates: KandidatenEingang[] = [{'username': 'if160189', 'firstname': 'Lisa', 'lastname': 'Berger', 'candidateClass': '4CHIF', 'department': 'Informatik', 'picture': '', 'electionPromise': 'ICh bin gut!', 'position': 'Schulsprecher'},
    {'username': 'it150170', 'firstname': 'Peter', 'lastname': 'Huber', 'candidateClass': '5AHITN', 'department': 'Medientechnik', 'picture': '', 'electionPromise': 'Weils i bin!', 'position': 'AbteilungssprecherI'},
    {'username': 'el170143', 'firstname': 'Ines', 'lastname': 'Gruber', 'candidateClass': '2AHEL', 'department': 'Elektronik', 'picture': '', 'electionPromise': 'Bitte!', 'position': 'Schulsprecher'}];
  count = 0;

  httpService: HttpService;



  constructor(httpService: HttpService, private dataservice: DataService) {
    this.httpService = httpService;
    this.httpService.getCandidates().subscribe((res) => this.setCandidates(res));

  }

  ngOnInit() {
  }

  setCandidates(res){
    res.forEach(item => {
      console.log(item);
      if (item.pflicht === 'j') {
        item.checked = true;
        this.checkCount++;
      } else {
        item.checked = false;
      }
      this.candidates[this.count] = item;
      this.count++;
    });

    console.log(this.candidates);
  }

  getCandidate(candidate: KandidatenEingang){
    console.log(candidate);
    this.dataservice.candidateEmitter.emit(candidate);
  }

}
