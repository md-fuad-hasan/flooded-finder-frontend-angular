import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'flooded-finder-frontend';

  isAdmin: boolean = false;

  authCheck() {
    const token = localStorage.getItem('AuthToken');
    const userType = localStorage.getItem('UserType');
    if (token != null) {
      if (userType == 'Admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  }

  ngOnInit(): void {
    this.authCheck();
  }
}
