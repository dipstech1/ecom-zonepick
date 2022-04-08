import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/service/authentication.service";
import { environment } from "src/environments/environment";

@Injectable()
export class CartService{
    userId:string = '';
    constructor(private http:HttpClient, private auth:AuthenticationService){
        this.userId = this.auth.getUserId();
    }

    getCartData(){ 
        return this.http.get(`${environment.baseUrl}${environment.apiURL.cart}/${this.userId}`)
    }
    deleteCartData(id:any){ 
        return this.http.delete(`${environment.baseUrl}${environment.apiURL.cart}/${ this.userId}/${id}`)
    }

    checkoutProduct(data:any){
        let checkoutData = {
            purchasables : data,
            userid:this.userId
        }
        return this.http.post(`${environment.baseUrl}ptransaction`,checkoutData)
    }

    getAllTransactions(){
        return this.http.get(`${environment.baseUrl}ptransaction/${ this.userId}`)
    }
}