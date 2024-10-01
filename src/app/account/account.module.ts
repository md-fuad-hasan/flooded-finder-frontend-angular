import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AccountComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    BrowserModule
  ]
})
export class AccountModule { }
