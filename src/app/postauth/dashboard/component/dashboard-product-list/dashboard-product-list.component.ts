import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-product-list',
  templateUrl: './dashboard-product-list.component.html',
  styleUrls: ['./dashboard-product-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardProductListComponent implements OnInit {
  @Input() productList = []
  constructor() { }

  ngOnInit(): void {
  }

}
