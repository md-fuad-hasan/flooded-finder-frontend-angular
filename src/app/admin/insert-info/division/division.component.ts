import { Component, OnInit } from '@angular/core';
import { DivisionCreateModel, DivisionModel } from '../../../model/insert-info';
import { InsertInfoService } from '../../../service/insert-info.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent implements OnInit {
  divisionName: string = '';
  divisionList: DivisionModel[] = [];

  constructor(private insertInfoService: InsertInfoService) { }

  loadDivision() {
    this.insertInfoService.getDivisionData().subscribe({
      next: (res) => {
        this.divisionList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  postDivision() {
    const data: DivisionCreateModel = {
      name: this.divisionName
    }

    this.insertInfoService.postDivisionData(data).subscribe({
      next: (res) => {
        this.loadDivision();
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  ngOnInit() {
    this.loadDivision();
  }

}
