import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrls: ['./seller-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SellerCardComponent implements OnInit {

  @Input() userDetails:any
  constructor() { }

  ngOnInit(): void {
  }

}
