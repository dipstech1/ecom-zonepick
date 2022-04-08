import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserItemsListRoutingModule } from './user-items-list-routing.module';
import { UseritemsComponent } from './useritems/useritems.component';
import { UserItemService } from './api/useritem.service';


@NgModule({
  declarations: [
    UseritemsComponent
  ],
  imports: [
    CommonModule,
    UserItemsListRoutingModule
  ],
  providers:[UserItemService]
})
export class UserItemsListModule { }
