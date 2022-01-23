import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/service/http.service';
import { environment } from 'src/environments/environment';
import { IRegister } from '../../model/Register.model';

@Injectable()
export class RegisterService  extends HttpService<IRegister> {
  getResourceUrl(): string {
    return environment.apiURL.auth.register;
  }
  constructor(private http:HttpClient ) {
    super(http)
  }

  toServerModel(entity: IRegister) {
    return{
      ...entity
    }
}
}
