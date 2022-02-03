import { Component, OnInit } from '@angular/core';
import { tabTitles } from 'src/app/constants/text';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  tabList = [
    {title:tabTitles.BUY},{title:tabTitles.BORROW}
  ]
  selectedTabRecord:string = tabTitles.BUY
  constructor() { }

  ngOnInit(): void {
  }

  selectedTab(tab:string){
    this.selectedTabRecord = tab;
  }
}
