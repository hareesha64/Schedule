import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Matchdetails } from '../MatchDetails';
import { ActivatedRoute,RouterPreloader } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edited:boolean=false;
 editMatch:Matchdetails=new Matchdetails();
 matchId:number;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.matchId=params['id']);
    this.dataService.getMatchById(this.matchId).subscribe(match=>this.editMatch=match);
   
    
  
}
edit()
{
  if(this.editMatch.status==="Completed")
  {
    if(this.editMatch.winner.length===0 || this.editMatch.delay.length!==0){
      alert("winner should not be empty and delay time should be empty");}
      else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;

      }

  }
 else if(this.editMatch.status==="Delayed"||this.editMatch.status==="InProgress" || this.editMatch.status==="YetToStart")
  {
    if(this.editMatch.winner.length!==0 || this.editMatch.delay.length!==0){
      alert("winner should be empty and delay time should be empty");}
      else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }

  }
  else if(this.editMatch.winner.length!==0)
  {
    if(this.editMatch.status!=="Completed" || this.editMatch.delay.length!=0){
     
    alert("status should be completed and delay should be empty");}
    else
      {
       
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  
  this.edited=true;
      }
    

  }
  else if(this.editMatch.winner.length===0)
  {
    if(this.editMatch.status==="Completed" || this.editMatch.delay.length!==0){
    alert("status should not be completed and delay should  be empty" );}
    else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }

      
  }
  
 
 
 
}
}
