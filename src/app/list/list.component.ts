import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Matchdetails } from '../MatchDetails';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  matches:Matchdetails[];
  constructor(private dataService:DataService) {

   }

  ngOnInit(): void {
    this.dataService.getAllMatches().subscribe(teams=>this.matches=teams);

}
}
