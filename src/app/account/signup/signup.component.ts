import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../model/auth';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userPhone: string = '';

  registerUser() {
    const data: RegisterModel = {
      userName: this.userName,
      email: this.userEmail,
      password: this.userPassword,
      phone: this.userPhone
    }

    this.authService.registerUser(data).subscribe({
      next: (res) => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['team']);
      }
    });


  }

  ngOnInit(): void {

  }

}
