import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToasterService } from 'src/app/core/service/toaster.service';
import { CartService } from '../../api/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit,OnDestroy {

  purchaseItemData:any[] = [];
  totalItemNo = [1,2,3,4,5,6,7,8,9,10];
  totalPrice = 0
  private ngSubscribe = new Subject()
  constructor(private cartService:CartService, private toast:ToasterService) { }
 

  ngOnInit(): void {
    this.getCartList()
  }

  getCartList(){
    this.cartService.getCartData()
    .pipe(takeUntil(this.ngSubscribe))
    .subscribe((cartData:any)=>{
      console.log(cartData);
      this.purchaseItemData = cartData?.purchasables;
      this.purchaseItemData.forEach((item:any)=>{
        this.totalPrice += item?.price
      })
      
    })
  }

  removeItem(id:number){
    this.cartService.deleteCartData(id).subscribe((res:any) => {
      if(res?.acknowledged){
        this.toast.showSuccess("Cart item removed","")
      }
      this.getCartList()
    })
  }

  ngOnDestroy(): void {
    this.ngSubscribe.next();
    this.ngSubscribe.complete();
  }

}
