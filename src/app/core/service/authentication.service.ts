import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() { }

  setStorage(key:string,data:any){
    localStorage.setItem(key,JSON.stringify(data));
  }

  getStorageData(key:string){
    let data = localStorage.getItem(key);
    if(data){
      return JSON.parse(data)
    }
    return null;
  }

  isLoggedIn():boolean{
    return !!this.getStorageData('token');
  }
}
