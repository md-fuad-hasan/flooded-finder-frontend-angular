import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreaWithTeamModel, TeamWithAreaModel } from '../model/TeamArea';

@Injectable({
  providedIn: 'root'
})
export class TeamAreaService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:7022/';


  // Division
  areasVisitByTeamUrl = this.url + 'api/Area/AreasVisitByTeam';
  getAreaVisitByTeam() {
    return this.http.get<AreaWithTeamModel[]>(this.areasVisitByTeamUrl);
  }

  teamsVisitAreaUrl = this.url + 'api/TeamsVisitToAreas'
  getTeamsVisitArea() {
    return this.http.get<TeamWithAreaModel[]>(this.teamsVisitAreaUrl);
  }

}
