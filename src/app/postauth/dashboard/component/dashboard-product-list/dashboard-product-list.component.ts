import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-product-list',
  templateUrl: './dashboard-product-list.component.html',
  styleUrls: ['./dashboard-product-list.component.scss']
})
export class DashboardProductListComponent implements OnInit {
  productList = [1,2,2,2,2,2,2]
  constructor() { }

  ngOnInit(): void {
  }

}
