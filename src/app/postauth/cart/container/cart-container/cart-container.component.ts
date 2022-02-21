import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../api/cart.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit,OnDestroy {

  purchaseItemData:any[] = [];
  totalItemNo = [1,2,3,4,5,6,7,8,9,10]
  private ngSubscribe = new Subject()
  constructor(private cartService:CartService) { }
 

  ngOnInit(): void {
    this.getCartList()
  }

  getCartList(){
    this.cartService.getCartData()
    .pipe(takeUntil(this.ngSubscribe))
    .subscribe((cartData:any)=>{
      console.log(cartData);
      this.purchaseItemData = cartData?.purchasables
      
    })
  }

  removeItem(id:number){
    this.cartService.deleteCartData(id).subscribe((res:any) => {
      this.getCartList()
    })
  }

  ngOnDestroy(): void {
    this.ngSubscribe.next();
    this.ngSubscribe.complete();
  }

}
