import { Component, OnInit } from '@angular/core';
import { tabTitles } from 'src/app/constants/text';
import { DashboardService } from '../../api/dashboard.service';
import { DashboardFacade } from '../../facade/dashboard.facade';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  tabList = [
    {title:tabTitles.BUY},{title:tabTitles.BORROW}
  ]
  selectedTabRecord:string = tabTitles.BUY;
  allProductRecords:any = [];
  constructor(private dashboardService:DashboardFacade) { }

  ngOnInit(): void {
    this.dashboardService.getPurchaseProduct().subscribe((res:any) => {
      this.allProductRecords= [...res]
    })
  }

  selectedTab(tab:string){
    this.selectedTabRecord = tab;
  }
}
