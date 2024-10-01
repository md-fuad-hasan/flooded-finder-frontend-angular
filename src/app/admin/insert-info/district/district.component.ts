import { Component, OnInit } from '@angular/core';
import { DistrictCreateModel, DistrictModel, DivisionModel } from '../../../model/insert-info';
import { InsertInfoService } from '../../../service/insert-info.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {
  divisionId: number = 0;
  districtName: string = '';
  divisionList: DivisionModel[] = [];
  districtList: DistrictModel[] = [];

  constructor(private insertInfoService: InsertInfoService) { }

  loadDivision() {
    this.insertInfoService.getDivisionData().subscribe({
      next: (res) => {
        this.divisionList = res;

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadDistrict() {
    this.insertInfoService.getDistrictData().subscribe({
      next: (res) => {
        this.districtList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }




  postDistrict() {
    const data: DistrictCreateModel = {
      divisionId: this.divisionId,
      name: this.districtName
    }

    this.insertInfoService.postDistrictData(data).subscribe({
      next: (res) => {
        this.loadDistrict();
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })

  }





  ngOnInit() {
    this.loadDistrict();
    this.loadDivision();

  }

}
