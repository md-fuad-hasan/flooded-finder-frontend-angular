import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private cd: ChangeDetectorRef) {
  }

  isLoggedIn: boolean = false;

  loggedInCheck() {
    const token = localStorage.getItem('AuthToken');
    if (token != null) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('UserID');
    localStorage.removeItem('UserType');

    window.location.reload();
    this.router.navigate(['account/login']);



  }


  ngOnInit(): void {
    this.loggedInCheck();
  }

}
