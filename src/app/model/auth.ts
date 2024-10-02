import { Token } from "@angular/compiler"

export interface RegisterModel {
    userName: string
    email: string
    password: string
    phone: string
}

export interface LoginModel {
    email: string
    password: string
}

export interface AuthResult {
    token: any;
    userId: number;
    userType: string;
}