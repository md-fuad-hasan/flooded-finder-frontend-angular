import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InsertInfoService } from '../../../service/insert-info.service';
import { DistrictModel, DivisionModel, UpazilaCreateModel, UpazilaModel } from '../../../model/insert-info';

@Component({
  selector: 'app-upazila',
  templateUrl: './upazila.component.html',
  styleUrl: './upazila.component.css',
})
export class UpazilaComponent implements OnInit {

  divisionId: number = 0;
  districtId: number = 0;
  upazilaName: string = '';
  divisionList: DivisionModel[] = [];
  districtList: DistrictModel[] = [];
  upazilaList: UpazilaModel[] = [];

  constructor(private insertInfoService: InsertInfoService, private cd: ChangeDetectorRef) {


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

  loadUpazila() {
    this.insertInfoService.getUpazilaData().subscribe({
      next: (res) => {
        this.upazilaList = res;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  postUpazila() {
    const data: UpazilaCreateModel = {
      divisionId: this.divisionId,
      districtId: this.districtId,
      name: this.upazilaName
    }

    this.insertInfoService.postUpazilaData(data).subscribe({
      next: (res) => {
        this.cd.detectChanges();

        this.loadUpazila();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }


  onChangeDivison(val: any) {
    this.loadDistrictByDivision();
  }

  ngOnInit() {
    this.loadDivision();
    this.loadUpazila();




  }




}
