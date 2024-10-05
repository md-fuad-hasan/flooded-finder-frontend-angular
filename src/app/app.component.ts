import { Component, OnInit } from '@angular/core';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private messageService: MessageService) {


  }
  title = 'flooded-finder-frontend';
  displayShow: string = 'none';
  displayMessage: string = '';
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

  messageCheck() {
    this.displayMessage = this.messageService.showMsg;
    if (this.displayMessage != '') {
      this.displayShow = 'block';
    }
  }

  ngOnInit(): void {
    this.authCheck();
    this.messageCheck();
  }
}
