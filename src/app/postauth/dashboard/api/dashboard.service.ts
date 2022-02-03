import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }

  getProductForRent(){
    return this.http.get(`${environment.baseUrl}${environment.apiURL.rent}`)
  }

  getProductForPurchase(){
    return this.http.get(`${environment.baseUrl}${environment.apiURL.purchase}`)
  }
}
