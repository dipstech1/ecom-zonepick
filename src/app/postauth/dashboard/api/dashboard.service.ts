import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const CACHE_SIZE = 1;

@Injectable()
export class DashboardService {
  private rentcache$!: Observable<any>;
  private productcache$!: Observable<any>;
  constructor(private http:HttpClient) { }

  get rentProduct() {
    if (!this.rentcache$) {
      this.rentcache$ = this.getProductForRent().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.rentcache$;
  }

  get purchaseProduct() {
    if (!this.productcache$) {
      this.productcache$ = this.getProductForPurchase().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.productcache$;
  }

  getProductForRent(){
    return this.http.get(`${environment.baseUrl}${environment.apiURL.rent}`)
  }

  getProductForPurchase(){
    return this.http.get(`${environment.baseUrl}${environment.apiURL.purchase}`)
  }
}
