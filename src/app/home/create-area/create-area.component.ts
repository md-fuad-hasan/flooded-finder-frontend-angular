import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InsertInfoService } from '../../service/insert-info.service';
import { AreaModel, DistrictModel, DivisionModel, UpazilaModel } from '../../model/insert-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrl: './create-area.component.css'
})
export class CreateAreaComponent implements OnInit {



  divisionId: number = 0;
  districtId: number = 0;
  upazilaId: number = 0;
  areaName: string = '';
  areaPhone: string = '';
  divisionList: DivisionModel[] = [];
  districtList: DistrictModel[] = [];
  upazilaList: UpazilaModel[] = [];

  displayShow: string = 'none';
  errMsg: string = 'Something Went Wrong';



  constructor(private insertInfoService: InsertInfoService, private cd: ChangeDetectorRef, private router: Router) {


  }

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


  loadDistrictByDivision() {
    this.insertInfoService.getDistrictByDivision(this.divisionId).subscribe({
      next: (res) => {
        this.districtList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadUpazilaByDistrict() {
    this.insertInfoService.getUpazilaByDistrict(this.districtId).subscribe({
      next: (res) => {
        this.upazilaList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  postArea() {
    console.log(this.divisionId, this.districtId, this.upazilaId, this.areaName, this.areaPhone);
    const data: AreaModel = {
      divisionId: this.divisionId,
      districtId: this.districtId,
      upazilaId: this.upazilaId,
      name: this.areaName,
      phone: this.areaPhone

    }

    this.insertInfoService.postAreaData(data).subscribe({
      next: (res) => {
        this.router.navigate(['']);

        console.log(res);
      },
      error: (err) => {
        this.displayShow = 'block';
        console.log(err);
      }
    })

  }

  onChangeDivison(val: any) {
    this.loadDistrictByDivision();
  }

  onChangeDistrict(val: any) {
    this.loadUpazilaByDistrict();
    console.log(this.districtId);

  }

  closeTab() {
    this.displayShow = 'none';
  }


  ngOnInit(): void {
    this.loadDivision();
  }

}
