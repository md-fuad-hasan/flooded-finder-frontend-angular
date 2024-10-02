import { Component, OnInit } from '@angular/core';
import { TeamAreaService } from '../../service/team-area.service';
import { AreaWithTeamModel } from '../../model/TeamArea';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit {

  constructor(private teamAreaService: TeamAreaService) {

  }

  areaVisitByTeamList: AreaWithTeamModel[] = [];

  loadAreaWithTeam() {
    this.teamAreaService.getAreaVisitByTeam().subscribe({
      next: (res) => {
        this.areaVisitByTeamList = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.loadAreaWithTeam();
  }

}
