import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matchdetails } from './MatchDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='http://localhost:8081/api';
  constructor(private http:HttpClient) { }

getAllMatches():Observable<any>
{
 return this.http.get(this.url.concat("/match"));
  

  }
  getMatchById(matchId:number):Observable<any>
  {
   return this.http.get(this.url.concat("/match/")+matchId+"");
  }
 
  
  Update(match:Matchdetails):Observable<any>
  {
   
   
    return this.http.put(this.url.concat("/match"),match);
  }
}
