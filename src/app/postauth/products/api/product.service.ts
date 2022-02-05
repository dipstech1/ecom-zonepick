import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService{

    constructor(private http:HttpClient){}

    getProductById(id:string){
        return this.http.get(`${environment.baseUrl}${environment.apiURL.findProduct}/${id}`)
    }
}