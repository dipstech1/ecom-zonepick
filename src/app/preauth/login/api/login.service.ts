import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth, ILoginResponse } from '../../model/Login.model';

@Injectable()
export class LoginService  {
  
  
  constructor(private http:HttpClient ) {
  }

  login(data:IAuth){
    return this.http.post(`${environment.baseUrl}${environment.apiURL.auth.login}`,data)
  }

}
