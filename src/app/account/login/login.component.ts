import { Component, OnInit } from '@angular/core';
import { AuthResult, LoginModel } from '../../model/auth';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';
  authRes !: AuthResult


  constructor(private authService: AuthService, private router: Router) {

  }

  loginUser() {
    const data: LoginModel = {
      email: this.userEmail,
      password: this.userPassword
    }

    this.authService.loginUser(data).subscribe({
      next: (res) => {
        localStorage.setItem('AuthToken', res.token);
        localStorage.setItem('UserID', (res.userId).toString());
        localStorage.setItem('UserType', res.userType);

        this.router.navigate(['team']);


      },
      error: (err) => {
        console.log(err);

      }
    })


  }




  ngOnInit(): void {
  }


}
