import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/core/service/authentication.service";
import { environment } from "src/environments/environment";

@Injectable()
export class UserItemService{
    userId:string = '';
    constructor(private http:HttpClient, private auth:AuthenticationService){
        this.userId = this.auth.getUserId();
    }


    getAllTransactions(){
        return this.http.get(`${environment.baseUrl}ptransaction/${ this.userId}`)
    }
}