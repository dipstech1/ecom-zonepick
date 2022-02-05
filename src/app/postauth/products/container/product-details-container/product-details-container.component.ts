import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFacade } from '../../facade/product.facade';

@Component({
  selector: 'app-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss']
})
export class ProductDetailsContainerComponent implements OnInit {

  getRouterParam$!:Observable<Params>;
  productDetails!:any;
  productId:string = '';
  constructor(private activatedRoutes:ActivatedRoute,private productFacade:ProductFacade) { }

  ngOnInit(): void {
    this.getRouterParam$ = this.activatedRoutes.params;
    this.getRouterParam$.subscribe(param=>{
      this.productId = param.id;
      this.getProductDetails(this.productId);
    })
  }
  getProductDetails(id:string){
    this.productFacade.getProductById(id).subscribe((res:any)=>{
      this.productDetails = res[0];
      console.log(this.productDetails);
      
    });
  }

}
