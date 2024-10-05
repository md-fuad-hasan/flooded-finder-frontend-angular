import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthResult, LoginModel } from '../../model/auth';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';
  authRes !: AuthResult
  displayShow: string = 'none';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService, private cdr: ChangeDetectorRef) {

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

        this.router.navigate(['']);
        setTimeout(() => {
          window.location.reload();
        }, 1000)

      },
      error: (err) => {
        console.log(err);

        // this.messageService.showMessage(err);
        this.displayShow = 'block';

      }
    })


  }


  closeTab() {
    this.displayShow = 'none';
  }




  ngOnInit(): void {
  }


}
