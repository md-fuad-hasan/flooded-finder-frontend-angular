import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showMsg: string = '';

  showMessage(msg: any) {
    this.showMsg = msg;
  }


}
