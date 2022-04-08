import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseritemsComponent } from './useritems/useritems.component';

const routes: Routes = [
  {path:"", component:UseritemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserItemsListRoutingModule { }
