import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DivisionModel } from '../model/insert-info';
import { AuthResult, LoginModel, RegisterModel } from '../model/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:7022/';

  registerUser(data: RegisterModel): Observable<any> {
    const Api_Url = this.url + 'api/Register';
    return this.http.post(Api_Url, data);
  }

  loginUser(data: LoginModel): Observable<any> {
    const Api_Url = this.url + 'api/Login';
    return this.http.post(Api_Url, data);
  }

  isLoggedIn() {

    if (localStorage.getItem('UserType') == 'Admin') {
      return true;
    }
    return false;
  }

}
