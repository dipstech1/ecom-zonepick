import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRegister, IRegisterResponse } from '../../model/Register.model';

@Injectable()
export class RegisterService  {
  
  constructor(private http:HttpClient ) {
  }
  verifyOTP(otp:string, userID:string){
      return this.http.patch(`${environment.baseUrl}verify/${userID}`,{otp})
  }
  
  registerUser(user:IRegister):Observable<IRegisterResponse>{
    return this.http.post<IRegisterResponse>(`${environment.baseUrl}${environment.apiURL.auth.register}`,user)
  }
}
