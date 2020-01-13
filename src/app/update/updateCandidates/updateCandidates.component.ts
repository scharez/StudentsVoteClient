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
  candidates: KandidatenEingang[] = [{'username': 'if160189', 'firstname': 'Lisa', 'lastname': 'Berger', 'candidateClass': '4BHIF', 'department': 'Informatik', 'picture': '', 'electionPromise': 'ICh bin gut!', 'position': 'Schulsprecher'},
    {'username': 'it150170', 'firstname': 'Peter', 'lastname': 'Huber', 'candidateClass': '5AHITM', 'department': 'Medientechnik', 'picture': '', 'electionPromise': 'Weils i bin!', 'position': 'AbteilungssprecherI'},
    {'username': 'it140170', 'firstname': 'Hans', 'lastname': 'Herber', 'candidateClass': '5AHEL', 'department': 'Elektronik', 'picture': '', 'electionPromise': 'So hoid!', 'position': 'AbteilungssprecherE'},
    {'username': 'it150179', 'firstname': 'Lara', 'lastname': 'Michaelsen', 'candidateClass': '3BHIF', 'department': 'Informatik', 'picture': '', 'electionPromise': 'Weil is kau!', 'position': 'Schulsprecher'},
    {'username': 'it160170', 'firstname': 'Michael', 'lastname': 'Brett', 'candidateClass': '4AHBG', 'department': 'Medizintechnik', 'picture': '', 'electionPromise': 'I wüs!', 'position': 'Schulsprecher'},
    {'username': 'it170144', 'firstname': 'Ines', 'lastname': 'Gruber', 'candidateClass': '2AHEL', 'department': 'Elektronik', 'picture': '', 'electionPromise': 'Bitte!', 'position': 'Schulsprecher'},
    {'username': 'el170143', 'firstname': 'Mario', 'lastname': 'Hinterglemmer', 'candidateClass': '1AHEL', 'department': 'Elektronik', 'picture': '', 'electionPromise': 'I moch des besser ois de aundan!', 'position': 'SchulsprecherE'},
    {'username': 'el170145', 'firstname': 'Hannah', 'lastname': 'Feichtinger', 'candidateClass': '4BHITM', 'department': 'Medientechnik', 'picture': '', 'electionPromise': 'Es kennts mi!', 'position': 'Schulsprecher'},
    {'username': 'el170146', 'firstname': 'Karl', 'lastname': 'Fechter', 'candidateClass': '5AHITM', 'department': 'Medientechnik', 'picture': '', 'electionPromise': 'I kau. I wü!', 'position': 'Schulsprecher'}];
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
