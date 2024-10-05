import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeamAreaService } from '../../service/team-area.service';
import { AreaWithTeamModel, TeamArea } from '../../model/TeamArea';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit {

  constructor(private teamAreaService: TeamAreaService) {

  }

  areaVisitByTeamList: AreaWithTeamModel[] = [];
  isLoggedIn: boolean = false;
  token !: any;
  userId: any = 0;

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

  checkLoggedIn() {
    this.token = localStorage.getItem('AuthToken');
    this.userId = localStorage.getItem('UserID');
    if (this.token != null) {
      this.isLoggedIn = true;
      console.log(localStorage.getItem('UserType'));

    }
  }

  visitClicked(val: any) {
    const data: TeamArea = {
      userId: this.userId,
      areaId: val
    }

    console.log(this.userId, val);


    this.teamAreaService.postUserArea(data).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (res) => {
        console.log(res);

      }
    })

  }

  ngOnInit(): void {
    this.checkLoggedIn();
    this.loadAreaWithTeam();
  }

}
