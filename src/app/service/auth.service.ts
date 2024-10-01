import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DivisionModel } from '../model/insert-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  registerUser() {

  }

}
