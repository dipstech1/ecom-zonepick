import { Injectable } from "@angular/core";
import { share, shareReplay } from "rxjs/operators";
import { DashboardService } from "../api/dashboard.service";

@Injectable()
export class DashboardFacade{

    constructor(private dashboardService:DashboardService){}

    getRentProducts(){
        return this.dashboardService.getProductForRent()
    }

    getPurchaseProduct(){
        return this.dashboardService.getProductForPurchase()
    }
}