import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsContainerComponent } from './container/product-details-container/product-details-container.component';
import { ProductImageGalleryComponent } from './components/product-image-gallery/product-image-gallery.component';
import { SellerCardComponent } from './components/seller-card/seller-card.component';
import { SellerLocationComponent } from './components/seller-location/seller-location.component';
import { ProductFeaturesComponent } from './components/product-features/product-features.component';


@NgModule({
  declarations: [
    ProductDetailsContainerComponent,
    ProductImageGalleryComponent,
    SellerCardComponent,
    SellerLocationComponent,
    ProductFeaturesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
