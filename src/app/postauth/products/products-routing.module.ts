import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsContainerComponent } from './container/product-details-container/product-details-container.component';

const routes: Routes = [
  {path:"details/:id", component:ProductDetailsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
