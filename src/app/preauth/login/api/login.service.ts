import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/service/http.service';
import { IAuth } from '../../model/IAuth.model';

@Injectable()
export class LoginService extends HttpService<IAuth> {
  
  
  constructor(private http:HttpClient ) {
    super(http)
  }

  getResourceUrl(): string {
    return "login"
  }

  toServerModel(entity: IAuth) {
      return{
        ...entity
      }
  }
}
