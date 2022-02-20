import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './container/cart-container/cart-container.component';
import { CartService } from './api/cart.service';
import { TotalPipe } from './pipes/totalprice.pipe';


@NgModule({
  declarations: [
    CartContainerComponent,
    TotalPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  providers:[CartService]
})
export class CartModule { }
