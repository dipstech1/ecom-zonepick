import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginData:any){
    return this.http.post("https://reqres.in/api/login", loginData)
  }
}
