import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductFeaturesComponent implements OnInit {

  @Input() features = []
  constructor() { }

  ngOnInit(): void {
  }

}
