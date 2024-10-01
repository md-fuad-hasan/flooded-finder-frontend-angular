import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DistrictCreateModel, DistrictModel, DivisionCreateModel, DivisionModel, UpazilaCreateModel, UpazilaModel } from '../model/insert-info';

@Injectable({
  providedIn: 'root'
})
export class InsertInfoService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:7022/';


  // Division
  divisionUrl = this.url + 'api/Division';
  getDivisionData() {
    return this.http.get<DivisionModel[]>(this.divisionUrl);
  }
  postDivisionData(data: DivisionCreateModel) {
    return this.http.post<DivisionCreateModel>(this.divisionUrl, data);
  }

  //District
  districtUrl = this.url + 'api/District';
  getDistrictData() {
    return this.http.get<DistrictModel[]>(this.districtUrl);
  }

  getDistrictByDivision(divisionId: number) {
    const districtByDivisionUrl = this.url + 'api/District/ByDivision/' + divisionId;
    return this.http.get<DistrictModel[]>(districtByDivisionUrl)
  }

  postDistrictData(data: DistrictCreateModel) {
    return this.http.post<DistrictCreateModel>(this.districtUrl, data);
  }

  // Upazila
  upazilaUrl = this.url + 'api/Upazila';
  getUpazilaData() {
    return this.http.get<UpazilaModel[]>(this.upazilaUrl);
  }
  postUpazilaData(data: UpazilaCreateModel) {
    return this.http.post<UpazilaCreateModel>(this.upazilaUrl, data);
  }


}
