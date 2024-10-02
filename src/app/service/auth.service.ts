import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DivisionModel } from '../model/insert-info';
import { AuthResult, LoginModel, RegisterModel } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:7022/';

  registerUser(data: RegisterModel) {
    console.log(data);
    const Api_Url = this.url + 'api/Register';
    return this.http.post<RegisterModel>(Api_Url, data);
  }

  loginUser(data: LoginModel) {
    const Api_Url = this.url + 'api/Login';
    return this.http.post<AuthResult>(Api_Url, data);
  }

}
