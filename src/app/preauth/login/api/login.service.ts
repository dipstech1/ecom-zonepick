import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  testData(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5MDI0MzZmNS05ZTY5LTRmOGYtOTVhZi03YjE4MTEyNTcwZWYiLCJlbWFpbCI6ImRyY0BnbWFpbC5jb20iLCJ0eXBlIjoidXNlciIsImlhdCI6MTY0OTI2OTY5MCwiZXhwIjoxNjQ5MjczMjkwfQ.qpGzeoUzcAXgpWwuX4PGWxUxuds3B_rmYBj3oQRPLxg");
    headers = headers.set('userid', "902436f5-9e69-4f8f-95af-7b18112570ef");

    return this.http.get("https://jkv60g7gzg.execute-api.ap-south-1.amazonaws.com/dev/products/purchase",{headers})
  }

}
