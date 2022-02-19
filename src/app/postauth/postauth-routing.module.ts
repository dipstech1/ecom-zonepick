import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostauthShellComponent } from './postauth-shell.component';

const routes: Routes = [
  {
    path:"",
    component:PostauthShellComponent,
    children:[
      {path:"",loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:"user-profile",loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
      {path:"product",loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
      {path:"cart",loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostauthRoutingModule { }
