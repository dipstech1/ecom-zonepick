import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { ToasterService } from 'src/app/core/service/toaster.service';
import { ProductFacade } from '../../facade/product.facade';

@Component({
  selector: 'app-product-details-container',
  templateUrl: './product-details-container.component.html',
  styleUrls: ['./product-details-container.component.scss']
})
export class ProductDetailsContainerComponent implements OnInit, OnDestroy {

  getRouterParam$!: Observable<Params>;
  productDetails!: any;
  productId: string = '';
  userId:string = '';
  private ngUnsubscribe = new Subject();

  constructor(private activatedRoutes: ActivatedRoute, private productFacade: ProductFacade, 
    private authService:AuthenticationService, private toaster:ToasterService) { }

  ngOnInit(): void {
    this.getRouterParam$ = this.activatedRoutes.params;
    this.getRouterParam$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(param => {
      this.productId = param.id;
      this.getProductDetails(this.productId);
    });

    this.userId = this.authService.getUserId()
  }
  getProductDetails(id: string) {
    this.productFacade.getProductById(id)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res: any) => {
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
    })
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
     if(res.acknowledge){
        this.toaster.showSuccess(`${name} added to cart`, "Item added successfully")
     }
      
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
