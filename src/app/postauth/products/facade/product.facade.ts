import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "../api/product.service";

@Injectable()
export class ProductFacade{
    
    constructor(private productServce:ProductService){}

    getProductById(id:string){
       return this.productServce.getProductById(id);
    }

    addToCart(item:any){
        return this.productServce.addToCart(item);
    }
}