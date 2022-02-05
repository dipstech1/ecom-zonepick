import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-product-list',
  templateUrl: './dashboard-product-list.component.html',
  styleUrls: ['./dashboard-product-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardProductListComponent implements OnInit {
  @Input() productList:Array<any> = []
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToProductDetails(id:any){
    this.router.navigateByUrl(`/product/details/${id}`)
  }

}
