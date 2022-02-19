import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { ToasterService } from 'src/app/core/service/toaster.service';
import { ProductFacade } from '../../facade/product.facade';

@Component({
  selector: 'app-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss']
})
export class ProductDetailsContainerComponent implements OnInit {

  getRouterParam$!: Observable<Params>;
  productDetails!: any;
  productId: string = '';
  userId:string = '';
  constructor(private activatedRoutes: ActivatedRoute, private productFacade: ProductFacade, 
    private authService:AuthenticationService, private toaster:ToasterService) { }

  ngOnInit(): void {
    this.getRouterParam$ = this.activatedRoutes.params;
    this.getRouterParam$.subscribe(param => {
      this.productId = param.id;
      this.getProductDetails(this.productId);
    });

    this.userId = this.authService.getUserId()
  }
  getProductDetails(id: string) {
    this.productFacade.getProductById(id).subscribe((res: any) => {
      this.productDetails = res[0];
      console.log(this.productDetails);

    });
  }

  addToCart() {
    let {productId,purpose,_id,name} = this.productDetails;
    this.productFacade.addToCart({
      "userid": this.userId,
      productId,
      _id,
      "quantity": 1,
      purpose
    }).subscribe((res:any) => {
     if(res.acknowledge){
        this.toaster.showSuccess(`${name} added to cart`, "Item added successfully")
     }
      
    })
  }

}
