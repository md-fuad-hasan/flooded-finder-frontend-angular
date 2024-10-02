import { Component, OnInit } from '@angular/core';
import { TeamAreaService } from '../../service/team-area.service';
import { TeamWithAreaModel } from '../../model/TeamArea';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {

  constructor(private teamAreaService: TeamAreaService) {

  }

  teamsWithAreaList: TeamWithAreaModel[] = [];

  loadTeamWithArea() {
    this.teamAreaService.getTeamsVisitArea().subscribe({
      next: (res) => {
        this.teamsWithAreaList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.loadTeamWithArea();
  }


}
