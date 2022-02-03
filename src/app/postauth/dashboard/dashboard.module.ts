import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { DashboardProductListComponent } from './component/dashboard-product-list/dashboard-product-list.component';
import { CardModule } from 'src/app/ui-libary/card/card.module';



@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardProductListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
  ]
})
export class DashboardModule { }
