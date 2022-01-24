import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth, ILoginResponse } from '../../model/Login.model';

@Injectable()
export class LoginService  {
  
  
  constructor(private http:HttpClient ) {
  }

  testSer(){
    return this.http.get("https://reqres.in/api/users?page=2")
  }

}
